import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ModalPicker } from "../../components/ModalPicker";
import { ItemList } from "../../components/ItemList";

type RouteDetailParams = {
  Order:{
    table:number | string, 
    order_id:string,  
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams,'Order'>;

export type CategoryProps = {
  id:string,
  name:string,
}
export type ProductProps = {
  id:string,
  name:string,
}

export type ItemProps = {
  id:string,
  product_id:string,
  name:string,
  amount:number| string,
}


export default function Order(){
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();

  const [category,setCategory] = useState<CategoryProps[]|[] >([]);
  const [categorySelect,setCategorySelected] = useState<CategoryProps|undefined>();
  const [modalCategoryVisible,setModalCategoryVisible] = useState(false);

  const [products,setProducts] = useState<ProductProps[]|[] >([]);
  const [productSelected,setProductSelected] = useState<ProductProps|undefined>();
  const [modalProductVisible,setModalProductVisible] = useState(false);

  const [itens,setItens] = useState<ItemProps[]>([]);
  const [amount,setAmount] = useState('1');
  
  
  useEffect(()=>{
    async function loadInfo(){
      const respose = await api.get('/category');
      setCategory(respose.data);    
      setCategorySelected(respose.data[0])
      
    }
    loadInfo();
  },[]);

  useEffect(()=>{
    async function loadProducts(){
      const respose = await api.get('/category/product',{
        params:{
          category_id:categorySelect?.id,
        }
      });
      
      setProducts(respose.data);    
      setProductSelected(respose.data[0])
      
    }
    loadProducts();
  },[categorySelect]);

  async function closeOrder(){
    try{
      await api.delete('/order',{
        params:{
          order_id:route.params?.order_id
        }
      })
      navigation.goBack();
    }catch(error){
      console.log(error);
      
    }
}

  function handleChangeCategory(item:CategoryProps){
    setCategorySelected(item);
  }

  function handleChangeProducts(item:CategoryProps){
    setProductSelected(item);
  }

  async function handleAdd(){
    const response = await api.post('/order/add',{
      order_id:route.params?.order_id,
      product_id:productSelected?.id,
      amount:Number(amount)
    })

    let data ={
      id:response.data.id,
      product_id:productSelected?.id as string,
      name:productSelected?.name as string,
      amount:amount,
    }
    setItens(oldArray => [...oldArray,data])
  }

  async function handleDeleteItem(item_id:string){
    const response = await api.delete('/order/remove',{
      params:{
        item_id:item_id
      }
    })
    let removeItem = itens.filter(item=>item.id === item_id);
    setItens(removeItem);
     
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.table}</Text>
        {itens.length === 0 &&(
          <TouchableOpacity onPress={closeOrder}>
            <Feather name='trash-2' size={30} color='#ff3f4b' />
          </TouchableOpacity>
        )}
      </View>
      
      {category.length !== 0 && (
        <TouchableOpacity style={styles.input} onPress={()=>setModalCategoryVisible(true)}>
          <Text style={{ color:'#fff',}} >{categorySelect?.name}</Text>
        </TouchableOpacity>
      )}

      {products.length !== 0 && (
        <TouchableOpacity style={styles.input} onPress={()=>setModalProductVisible(true)}>
          <Text style={{ color:'#fff'}}>{productSelected?.name}</Text>
      </TouchableOpacity>
      )}

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput 
          style={[styles.input, {width:'60%', textAlign:'center',color:'#fff'}]} 
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          
          />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.AddButton} onPress={handleAdd}>
        <Text style={styles.AddText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.nextButton,{opacity:itens.length === 0 ? 0.3:1}]} 
          disabled={itens.length === 0}
        >
          <Text style={styles.NextText}>Avançar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex:1,marginTop:24}} 
        data={itens}
        keyExtractor={(item) =>item.id}
        renderItem={({item})=><ItemList data={item} deleteItem={()=>handleDeleteItem(item.id)} />}
       
      
      />

      <Modal
      transparent={true}
      visible={modalCategoryVisible}
      animationType='fade'
      >
        <ModalPicker
          options={category}
          handleCloseModal={()=>setModalCategoryVisible(false)}
          selectedItem={handleChangeCategory}
        />
      </Modal>

      <Modal
        transparent={true}
        visible={modalProductVisible}
        animationType='fade'
        >
        <ModalPicker
          options={products}
          handleCloseModal={()=>setModalProductVisible(false)}
          selectedItem={handleChangeProducts}
        />
      </Modal>
      
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
    marginTop:50,
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