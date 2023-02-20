import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { StackParamsList } from "../../routes/app.routes";

export default function Dashboard(){
  const {signOut} = useContext(AuthContext);
  const [tableNumber,setTableNumber] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>(); 

  async function openOrder(){
    // if(tableNumber === '') return;

    navigation.navigate('Order',{table:tableNumber,order_id:'order_id'});
  } 

  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput 
        style={styles.input}
        placeholder="Número da mesa"
        placeholderTextColor='#f0f0f0'
        keyboardType="numeric"
        value={tableNumber}
        onChangeText={setTableNumber}
        />
      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir Mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1d1d2e',
    paddingVertical:15
  },
  title:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    marginBottom:24,
  },
  input:{
    width:'90%',
    backgroundColor:'#101026',
    height:60,
    borderRadius:4,
    paddingHorizontal:10,
    color:'#fff',
    fontSize:20,
    marginBottom:20,
    textAlign:'center',
  },
  button:{
    backgroundColor:'#3fffa3',
    width:'90%',
    height:40,
    borderRadius:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#101026'
  }
})