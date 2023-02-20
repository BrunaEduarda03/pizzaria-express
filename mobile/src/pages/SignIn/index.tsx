import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";


export default function SignIn(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signIn,loadingAuth} = useContext(AuthContext);

  async function handleLogin(){
    if(email === '' || password === '') {
      alert('preencha todos os campos');
      return;
    }
    await signIn({email,password});  
  }
 
  return(
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo} 
        />
    

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Digite seu e-mail"
          style={styles.input}
          placeholderTextColor='#F0F0F0'
          value={email}
          onChangeText={setEmail}
          />
        <TextInput 
          placeholder="Digite sua senha"
          style={styles.input}
          placeholderTextColor='#F0F0F0'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          />

        {loadingAuth? (
          <ActivityIndicator color='#fff' size={25} />
        ):(
         <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity> 
        )}
        
        <Text style={styles.register}>Não possui conta? Registre-se!</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#1D1D2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom:10,
  },
  inputContainer:{
    width:'95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:32,
    paddingVertical:18,
  },
  input:{
    paddingLeft:10,
    width:'95%',
    height:40,
    marginBottom:14,
    backgroundColor:'#101026',
    color: '#FFFFFF',
    borderRadius:5,
    paddingHorizontal:8,
  },
  button:{
    width:'95%',
    height:40,
    backgroundColor:'#3fffa3',
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color: '#101026',
  },
  register:{
    color: '#FFFFFF',
    marginTop:14,
  }
})