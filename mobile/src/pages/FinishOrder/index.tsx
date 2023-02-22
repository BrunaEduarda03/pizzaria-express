import { useRoute } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OrderRouteProps } from "../Order";
import {Feather} from '@expo/vector-icons'

export default function FinishOrder(){
  const route = useRoute<OrderRouteProps>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>Você deseja finalizar o pedido?</Text>
      <Text style={styles.table}>Mesa 30</Text>

      <TouchableOpacity style={styles.button} >
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