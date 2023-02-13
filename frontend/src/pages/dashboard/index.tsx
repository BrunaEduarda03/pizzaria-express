import Head from "next/head"
import { Header } from "../../components/Header"
import { canSSRAuth } from "../utils/canSSRAuh"

export default function Dashboard (){
  return (
    <>
    <Head>
      <title>Painel - Pizzaria</title>
    </Head>
    <Header />
    </>
  )
}

export const getServerSideProps = canSSRAuth(async(context)=>{
  return {
    props:{}
  }
})