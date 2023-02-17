// paginas de acesso usuarios logados

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Dashboard";
const Stack = createNativeStackNavigator();

export default function AppRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='Dashboard' component={Dashboard} />
    </Stack.Navigator>
  )
}