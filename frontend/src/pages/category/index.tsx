import Head from "next/head";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from "../utils/canSSRAuh";
import styles from './styles.module.scss'

export default function Category(){
  const [name,setName] = useState('');

  async function handleCategory(e:FormEvent){
    e.preventDefault();
    if(name===''){
      toast.error('preencha os campos');
      return;
    }
    const apiClient = setupAPIClient();
    await apiClient.post('/category',{
      name: name,
    })
    toast.success('categoria cadastrada com sucesso');
    setName('');
  }
  return (
    <>
    <Head>
      <title>Painel - Pizzaria</title>
    </Head>

    <Header />

    <main className={styles.container}>
      <h1>Nova Categoria</h1>
      <form 
        className={styles.form}
        onSubmit={handleCategory}
        >
        <input 
          type='text'
          placeholder="Digite o nome para a categoria"
          className={styles.input}
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <button 
          type="submit"
          className={styles.button}
        >
          Cadastrar
        </button>
      </form>
    </main>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (context) => {

  return {
    props: {}
  }
})