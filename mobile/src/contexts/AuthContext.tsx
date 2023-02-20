
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from "react"

import { api } from "../services/api";

export const AuthContext = createContext({} as AuthContextData); 

type UserProps = {
  id: string,
  email:string,
  name:string,
  token:string
}

type AuthContextData = {
  user:UserProps,
  isAuthenticated:boolean,
  signIn:(credencials:SignInProps)=>Promise<void>
  signOut: () => Promise<void>
  loadingAuth:boolean
}

type AuthProviderProps = {
  children:ReactNode
}

type SignInProps = {
  email:string,
  password:string
}

export function AuthProvider({children}:AuthProviderProps){
  const [user,setUser] = useState<UserProps>({
    id:'',
    name:'',
    email:'',
    token:'',
  })
  const [loadingAuth,setLoadingAuth] = useState(false);
  const isAuthenticated = !! user.name;

  useEffect(()=>{
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@pizzaria');
      let hasToken:UserProps = JSON.parse(userInfo ||'{}');
      if(Object.keys(hasToken).length > 0){
        setUser({
          id:hasToken.id,
          name:hasToken.name,
          email:hasToken.email,
          token:hasToken.token
        });

        api.defaults.headers.common['Authorization'] = `Bearer ${hasToken.token}`
      }
    }
    getUser();
  },[]);

  async function signIn({email,password}:SignInProps){
    setLoadingAuth(true);
    try{
      const response = await api.post('/login',{
        email,
        password
      })
      // console.log(response.data);
      const {id,name,token} = response.data;
      const data = {
        ...response.data
      }
      await AsyncStorage.setItem('@pizzaria',JSON.stringify(data));
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser({id,name,email,token});
      setLoadingAuth(false);
      
    }catch(error){
      console.log('erro ao acessar:',error);
      setLoadingAuth(false);
      
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser({
          id:'',
          name:'',
          email:'',
          token:'',
        })
      
      })
  }

  return (
    <AuthContext.Provider value={{user,isAuthenticated,signIn,signOut,loadingAuth}}>
      {children}
    </AuthContext.Provider>
  )
}