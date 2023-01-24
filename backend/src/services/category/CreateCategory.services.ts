import ICategory from "../../interface/category/ICategory";
import prismaClient from "../../prisma";

class CreateCategoryService{
  async execute({name}:ICategory){
    if(!name) throw new Error("Name Invalid");

    const category = await prismaClient.category.create({
      data: {
        name:name,
      },
      select:{
        id:true,
        name:true,
      }
    })
    return category;
  }
}
export {CreateCategoryService};