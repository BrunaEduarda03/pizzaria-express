import IOrderRequest from "../../interface/order/IOrderRquest";
import prismaClient from "../../prisma";

class CreateOrderService{
  async execute({ table, name}: IOrderRequest ){

    const order = await prismaClient.order.create({
      data:{
        table: table,
        name: name
      }
    })


    return order;

  }
}

export { CreateOrderService }