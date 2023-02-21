import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';

interface ItemProps {
  data:{
    id:string;
    product_id:string;
    name:string;
    amount:number| string;
    }
}
export function ItemList({data}:ItemProps){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.amount} - {data.name}</Text>

      <TouchableOpacity >
        <Feather  name='trash-2' color='#ff3f4b' size={25} />
      </TouchableOpacity >
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:'#101026',
    marginBottom:14,
    paddingHorizontal:10,
    paddingVertical:16,
  },
  title:{
    fontSize:18,
    color:'#fff',
  },
 
})