import { Request, Response } from "express";
import { RemoveItemServices } from "../../services/order/RemoveItem.services";

class RemoveItemController{
  async handle(req: Request, res: Response){
    const item_id = req.query.item_id as string;
    const removeItemServices = new RemoveItemServices();

    const removeItem = await removeItemServices.execute({item_id});
    return res.json(removeItem);
  }
}

export {RemoveItemController};