import prismaClient from "../../prisma";

interface IDetailRequest{
  order_id:string;
}

class DetailOrderService{
  async execute({order_id}:IDetailRequest){
    const detailOrder = await prismaClient.item.findMany({
      where:{
        order_id:order_id
      },
      include:{
        product:true,
        order:true,
      }
    })
    return detailOrder;
  }
}

export {DetailOrderService};