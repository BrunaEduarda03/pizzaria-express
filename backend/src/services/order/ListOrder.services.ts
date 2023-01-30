import prismaClient from "../../prisma";

class ListOrdersService{
  async execute(){
    const getAllOrders = await prismaClient.order.findMany({
      where:{
        draft:false,
        status:false,
      },
      orderBy:{
        created_at:'desc',
      }
    });

    return getAllOrders;
  }
}

export {ListOrdersService};