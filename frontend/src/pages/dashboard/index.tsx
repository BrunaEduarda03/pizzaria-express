import { canSSRAuth } from "../utils/canSSRAuh"

export default function Dashboard (){
  return (
    <h1>Dashboard</h1>
  )
}

export const getServerSideProps = canSSRAuth(async(context)=>{
  return {
    props:{}
  }
})