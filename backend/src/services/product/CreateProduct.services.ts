import IProduct from "../../interface/product/IProduct";
import prismaClient from "../../prisma";

class CreateProductService{
  async execute({name,price,description,banner,category_id}:IProduct){
    const product = await prismaClient.product.create({
      data:{
        name:name,
        price:price,
        description:description,
        banner:banner,
        category_id:category_id,
      }
      
    })
    return product;
  }
}
export  {CreateProductService}