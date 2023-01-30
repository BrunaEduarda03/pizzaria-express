import IItemId from "../../interface/order/IItemId";
import prismaClient from "../../prisma";

class RemoveItemServices{
   async execute({item_id}:IItemId){
    const removeItem = await prismaClient.item.delete({
      where:{
        id:item_id,
      }
    })

    return removeItem;
   }
}

export {RemoveItemServices};