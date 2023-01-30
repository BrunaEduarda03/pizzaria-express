import IOrderId from "../../interface/order/IOrderId";
import prismaClient from "../../prisma";

class RemoveOrderService {
  async execute({order_id}:IOrderId){

    const order = await prismaClient.order.delete({
      where:{
        id:order_id,
      }
    })
    return order;
  }
}

export {RemoveOrderService};