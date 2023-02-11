import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/apiClient";

type AuthContextProps = {
  user:UserProps;
  isAutenticated:boolean;
  signIn:(credencials:SignInProps) =>Promise<void>
  signOut:()=>void;
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
    Router.push('/dashboard');

  }catch(error){
    console.log('erro ao acessar:',error);
  }
}

const context = {user, isAutenticated, signIn,signOut};

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}