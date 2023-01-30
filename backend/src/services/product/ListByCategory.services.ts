import IproductRequest from "../../interface/IproductRequest";
import prismaClient from "../../prisma";

class ListByCategoryService{
  async execute({ category_id}:IproductRequest){
    const findAllByCategory = await prismaClient.product.findMany({
      where:{
        category_id:category_id
      }
    })
    return findAllByCategory;
  }
}
export {ListByCategoryService};