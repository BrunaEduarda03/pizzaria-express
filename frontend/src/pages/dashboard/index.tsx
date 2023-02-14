import Head from "next/head"
import { Header } from "../../components/Header"
import { canSSRAuth } from "../utils/canSSRAuh"


export default function Dashboard(){
  return(
    <>
    <Head>
      <title>Painel - Sujeito Pizzaria</title>
    </Head>
    <div>
      <Header/>
    
      <h1>Painel</h1>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async(context)=>{
  return {
    props:{}
  }
})
