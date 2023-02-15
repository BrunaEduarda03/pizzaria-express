
import Head from "next/head";
import { ChangeEvent, useState,FormEvent } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from "../utils/canSSRAuh";
import styles from './styles.module.scss'

type ItemProps = {
  id:string;
  name:string;
}

interface Categoryrops{
  categoryList:ItemProps[];
}

export default function Product({categoryList}:Categoryrops){
  console.log(categoryList);
  
  const [categories,setCategories] = useState(categoryList||[] );
  const [avatarURL,setAvatarUrl] = useState('');
  const [imageAvatar,setImageAvatar] = useState('');
  const [categorySelected,setCategorySelected] = useState(0);
  const [name,setName] = useState('');
  const [price,setPrice] = useState(0);
  const [description,setDescription] = useState('');
  
  async function handleFile(e:ChangeEvent<HTMLInputElement>){
    // console.log(e.target.files);   
    if(!e.target.files) return;

    const image = e.target.files[0];
    if(!image) return;

    if(image.type === 'image/png'|| image.type === 'image/jpeg'){
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]))
    }
    

    
  }

  function handleChangeCategory(e){
    setCategorySelected(e.target.value);
  }

  async function handleSubmit(e:FormEvent){
    e.preventDefault();
    try{
      const data = new FormData();
      if(name ==='' || price === null || description ==='' || imageAvatar ===''){
        toast.error('Preencha todos os campos');
        return;
      }
      data.append('name',name);
      data.append('price',price.toLocaleString());
      data.append('description',description);
      data.append('category_id',categories[categorySelected].id);
      data.append('file',imageAvatar);

      const apiClient = setupAPIClient();
      await apiClient.post('/product',data);
      toast.success('produto cadastrado com sucesso')
      setName('');
      setDescription('');
      setPrice(null);
      setImageAvatar('');
    }catch(error){
      console.log(error);
      toast('ops,erro ao cadastrar')
    }
  }

  return (
    <>
      <Head>
        <title>Novo Produto - pizzaria</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Novo produto</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.image}>
            <span>
              <FiUpload color="#FFF" size={25} />
            </span>
            <input 
              type='file' 
              accept="image/png,image/jpeg" 
              onChange={handleFile}
              />
            {avatarURL && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={styles.preview}
                src={avatarURL}
                alt='foto do produto'
              />
            )}
            
          </label>
 


          <select 
            placeholder="Selecione a categoria"
            value={categorySelected}
            onChange={handleChangeCategory}
          >
            {categories.map((item,index)=>{
              return(
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              )

            })}
          </select>

          <input
            type='text'
            placeholder="Insira o nome do item"
            className={styles.input}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          
          />
          <input
            type='text'
            placeholder="Preço do produto"  
            className={styles.input}
            value={price}
            onChange={(e)=>setPrice((e.target.value))}
          />
          <textarea 
            placeholder="Insira a descrição"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          
          <button
            className={styles.button}
          >Cadastrar
          </button>
        </form>
      </main>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (context) => {

  const apiClient = setupAPIClient(context);
  const response = await apiClient.get('category');
  // console.log(response.data);
  

  return {
    props: {
      categoryList: response.data,
    }
  }
})