// paginas de acesso usuarios não - logados

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";


const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}