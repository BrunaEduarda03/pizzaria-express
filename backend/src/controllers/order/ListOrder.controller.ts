import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrder.services";

class ListOrdersController{
  async handle(_req: Request, res: Response){
    const listOrdersService = new ListOrdersService();

    const getAllOrders = await listOrdersService.execute();

    return res.json(getAllOrders);
  }
}

export {ListOrdersController};