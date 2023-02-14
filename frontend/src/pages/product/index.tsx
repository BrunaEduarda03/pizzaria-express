
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Header } from "../../components/Header";
import { setupAPIClient } from "../../services/api";
import styles from './styles.module.scss'

export default function Product(){
  const [category,setCategory] = useState('');
  const [avatarURL,setAvatarUrl] = useState('');
  const [imageAvatar,setImageAvatar] = useState('');
  
  async function handleFile(e:ChangeEvent<HTMLInputElement>){
    console.log(e.target.files);   
    if(!e.target.files) return;

    const image = e.target.files[0];
    if(!image) return;

    if(image.type === 'image/png'|| image.type === 'image/jpeg'){
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]))
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
        <form className={styles.form}>
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
 


          <select placeholder="Selecione a categoria">
            <option>Bebida</option>
            <option>Pizzas</option>
          </select>

          <input
            type='text'
            placeholder="Insira o nome do item"
            className={styles.input}
          
          />
          <input
            type='text'
            placeholder="Insira o valor"  
            className={styles.input}
          />
          <textarea 
            placeholder="Insira a descrição"
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