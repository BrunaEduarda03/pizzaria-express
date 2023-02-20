import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons'

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.table}</Text>
        <TouchableOpacity>
          <Feather name='trash-2' size={30} color='#ff3f4b' />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.input}>
          <Text style={{ color:'#fff',}} >Pizzas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color:'#fff'}}>Pizza frango com catupiry</Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput 
          style={[styles.input, {width:'60%', textAlign:'center',color:'#fff'}]} 
          value='1'
          keyboardType="numeric"
          
          />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.AddButton}>
        <Text style={styles.AddText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.NextText}>Avançar</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#1d1d2e',
    paddingVertical:'5%',
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    color:'#fff',
    marginRight:20,
  },
  header:{
    flexDirection:'row',
    marginTop:30,
    marginBottom:20,
  },
  input:{
    width:'100%',
    backgroundColor:'#101026',
    height:40,
    marginBottom:20,
    borderRadius:5,
    paddingHorizontal:10,
    justifyContent: 'center', 
  },
  qtdContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  qtdText:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold',
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
   
  },
  AddButton:{
    width:'20%',
    height:40,
    backgroundColor:'#3fd1ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
  AddText:{
    fontWeight:'bold',
    fontSize:25,
    color:'#ffffffbb',
  },
  nextButton:{
    width:'75%',
    height:40,
    backgroundColor:'#3fffa3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
  NextText:{
    fontWeight:'bold',
    fontSize:18,
    color:'#000',
  },
})