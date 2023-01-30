import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItem.services";


class AddItemController{
async handle(req: Request, res: Response){
  const { order_id, product_id, amount } = req.body;

  const addItem = new AddItemService();
  try{
    const order = await addItem.execute({
    order_id,
    product_id,
    amount
  })
  console.log(order);
  
  return res.json(order);
  }catch(error){
    console.log('error:', + error );
    return res.status(404).json({error:error});
  }
  

}
}

export { AddItemController }