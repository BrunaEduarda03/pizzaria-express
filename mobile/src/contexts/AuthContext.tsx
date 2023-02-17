import { createContext, ReactNode, useState } from "react"

const AuthContext = createContext({} as AuthContextData); 

type UserProps = {
  id: string,
  email:string,
  name:string,
  token:string
}

type AuthContextData = {
  user:UserProps,
  isAuthenticaded:boolean,
}

type AuthProviderProps = {
  children:ReactNode
}

export function AuthProvider({children}:AuthProviderProps){
  const [user,setUser] = useState<UserProps>({
    id:'',
    name:'',
    email:'',
    token:'',
  })
  const isAuthenticaded = !! user.name;

  return (
    <AuthContext.Provider value={{user,isAuthenticaded}}>
      {children}
    </AuthContext.Provider>
  )
}