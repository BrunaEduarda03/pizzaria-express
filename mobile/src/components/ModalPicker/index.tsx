import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CategoryProps } from "../../pages/Order";

interface ModalPickerProps{
 options:CategoryProps[];
 handleCloseModal:()=>void;
 selectedItem:(item:CategoryProps)=>void
} 
const {width:WIDTH,height:HEIGHT} = Dimensions.get('window');

export function ModalPicker({options,handleCloseModal,selectedItem}:ModalPickerProps){

function onPressItem(item:CategoryProps){
  //console.log(item);
  selectedItem(item);
  handleCloseModal();
  
}

  const option = options.map((item,index)=>(
    <TouchableOpacity key={index} style={styles.options} onPress={()=>onPressItem(item)} >
      <Text style={styles.item}>
        {item?.name}
      </Text>
    </TouchableOpacity>
    
  ))
 return (
  <TouchableOpacity onPress={handleCloseModal} style={styles.container}>
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {option}
      </ScrollView>
    </View>
  </TouchableOpacity>
 )
}
 const  styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    width:WIDTH - 20,
    height:HEIGHT/2,
    backgroundColor:'#101026',
    borderColor:'#8a8a8a',
    borderRadius:5,
  },
  options:{
    alignItems:'flex-start',
    borderTopWidth:1,
    borderTopColor:'#8a8a8a',
    borderRadius:7,
  },
  item:{
    margin:20,
    color: '#fff',
    fontWeight:'bold',
    fontSize:20,
    
  }
 })