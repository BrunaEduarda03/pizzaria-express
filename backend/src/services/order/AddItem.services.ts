import IItemRequest from "../../interface/order/IItemRequest";
import prismaClient from "../../prisma";

class AddItemService{
  async execute({order_id,product_id,amount}:IItemRequest){

    const addItem = await prismaClient.item.create({
      data:{
        order_id:order_id,
        product_id:product_id,
        amount
      }
    })
    return addItem;
  }
}
export {AddItemService};