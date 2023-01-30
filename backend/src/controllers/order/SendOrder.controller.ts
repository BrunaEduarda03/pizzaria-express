import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrder.services";

class SendOrderController{
  async handle(req: Request, res: Response){
    const {order_id} = req.body;

    const sendOrderService = new SendOrderService();

    const sendOrder = await sendOrderService.execute({order_id});

    return res.json(sendOrder);
  }
}

export {SendOrderController};