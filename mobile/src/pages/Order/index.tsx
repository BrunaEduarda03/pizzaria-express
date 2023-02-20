import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteDetailParams = {
  Order:{
    table:number | string, 
    order_id:string,  
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams,'Order'>;

export default function Order(){
  const route = useRoute<OrderRouteProps>();
  return (
    <SafeAreaView>
      <Text>Mesa {route.params.table}</Text>
      
    </SafeAreaView>
  )
}