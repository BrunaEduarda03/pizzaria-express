import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
  FinishOrder:{
    table:number | string, 
    order_id:string,  
  }
  }
type FinishOrderRouteProp = RouteProp<RouteDetailParams,'FinishOrder'>

export default function FinishOrder(){
  const route = useRoute<FinishOrderRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinishOrder(){
    try{
      await api.put('/order/send',{
        order_id:route?.params.order_id
      });
      navigation.popToTop();
    }catch(e){
      console.log('erro ao finalizar',e);
      
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>Você deseja finalizar o pedido?</Text>
      <Text style={styles.table}>Mesa {route.params.table}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinishOrder} >
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
        <Feather name='shopping-cart' size={25} color='#1d1d2e' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1d1d2e'
  },
  question:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:12,
  },
  table:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
    marginBottom:14,
  },
  button:{
    backgroundColor:'#3fffa3',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:45,
    width:'65%',
    borderRadius:5, 
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    marginRight:16,
    color:'#1d1d2e'
  }
})