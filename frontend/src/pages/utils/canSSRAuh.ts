import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../../services/errors/AuthTokenError";

export function canSSRAuth<P>(fn:GetServerSideProps<P>){ //só usuarios logados terçao acesso a pagina
  return async (context:GetServerSidePropsContext):Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);
    const token = cookies['@pizzaria.token'];

    if(!token){
      return {
        redirect:{
          destination: '/',
          permanent:false,
        }
      }
    }
    try{
      return await fn(context);
    }catch(error){
      if(error instanceof AuthTokenError){
        destroyCookie(context,'@pizzaria.token');
        return {
          redirect:{
            destination: '/',
            permanent:false,
          }
        }
      }
    }

    
  }

}