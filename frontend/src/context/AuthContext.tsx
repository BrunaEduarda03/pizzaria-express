import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
  user:UserProps;
  isAutenticated:boolean;
  signIn:(credencials:SignIn) =>Promise<void>
}
  
  type UserProps = {
    id:string;
    name:string;
    email:string;
}

type SignIn= {
  email:string;
  password:string; 
}

export const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children:ReactNode;
}

export function AuthProvider({children}:AuthProviderProps){
  const [user,setUser] = useState<UserProps>();
  const isAutenticated = !!user;

async function signIn(){
  alert('logou');
}


  return (
    <AuthContext.Provider value={{user, isAutenticated, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}