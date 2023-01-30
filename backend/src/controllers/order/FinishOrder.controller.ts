import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrder.services";


class FinishOrderController{
  async handle(req: Request, res: Response){
    const {order_id} = req.body;
    const finishOrderService = new FinishOrderService();

    const finishOrder = await finishOrderService.execute({order_id});

    return res.json(finishOrder);
  }
}

export {FinishOrderController}