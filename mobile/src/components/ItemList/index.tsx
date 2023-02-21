import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';
import { api } from "../../services/api";

interface ItemProps {
  data:{
    id:string;
    product_id:string;
    name:string;
    amount:number| string;
    };
    deleteItem:(item_id:string)=>void;
}
export function ItemList({data,deleteItem}:ItemProps){

  async function handleDeleteItem(){
    deleteItem(data.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.amount} - {data.name}</Text>

      <TouchableOpacity onPress={handleDeleteItem}>
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