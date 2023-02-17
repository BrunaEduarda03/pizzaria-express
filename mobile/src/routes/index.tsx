import { ActivityIndicator, View } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){
  const isAuthenticated = false;
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