import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/apiClient";

type AuthContextProps = {
  user:UserProps;
  isAutenticated:boolean;
  signIn:(credencials:SignInProps) =>Promise<void>
  signOut:()=>void;
  signUp:(credencials:SignUpProps) =>Promise<void>
}
  
  type UserProps = {
    id:string;
    name:string;
    email:string;
}

type SignInProps= {
  email:string;
  password:string; 
}

type SignUpProps= {
  name:string;
  email:string;
  password:string; 
}

export const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children:ReactNode;
}

export function signOut(){
  try{
    destroyCookie(undefined,'@pizzaria.token');
    Router.push('/');
  }catch{
    console.log('erro ao deslogar');
    
  }
}

export function AuthProvider({children}:AuthProviderProps){
  const [user,setUser] = useState<UserProps>();
  const isAutenticated = !!user;

  useEffect(() => {
    const {'@pizzaria.token':token} = parseCookies();

    if(token){
      api.get('/me')
        .then((response) => {
          const {id,name,email} = response.data;
          setUser({id,name,email});
        })
        .catch(()=>{
          signOut();
        })
      
    }
  },[])

async function signIn({email,password}:SignInProps){
  try{
    const response = await api.post('/login',{
      email,
       password
    })
    const {id,name,token} = response.data;

    setCookie(undefined,'@pizzaria.token',token,{
      maxAge: 60 * 60 * 24 * 30, // expira em 1 mes
      path:'/' //todos os caminhos terçao acesso ao cookie
    })

    setUser({id,name,email});
    api.defaults.headers['Authorization'] =`Bearer ${token}`  // passa o token para proximas requisições
    toast.success('Bem vindo de volta');
    Router.push('/dashboard');

  }catch(error){
    toast.error('erro ao acessar')
    console.log('erro ao acessar:',error);
  }
}

async function signUp({name,email,password}:SignUpProps){
  try{
    const response = api.post('/users',{
      name,email,password
    })
    toast.success('cadastrado com sucesso');
    Router.push('/');
    
  }catch(error){
    toast.error('erro ao cadastrar',error);
    
  }
}

const context = {user, isAutenticated, signIn,signOut,signUp};

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}