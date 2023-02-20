import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){
  const {isAuthenticated} = useContext(AuthContext);
  const loading = false;
  if(loading){
      return( 
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#1D1E2E'
        }}>
          <ActivityIndicator size={60} color='#FFF' />
        </View>
      )
  }
  return (
    
     isAuthenticated ? <AppRoutes /> : <AuthRoutes /> 
  )
}