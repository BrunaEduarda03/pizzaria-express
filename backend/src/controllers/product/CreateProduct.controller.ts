import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProduct.services";

class CreateProductController{
  async handle(req:Request,res:Response){
    const {name,price,description,category_id} = req.body;
    let banner='';
    const createProductService = new CreateProductService();
    if(!req.file){
      throw new Error('Error upload file')
    }else{
      const {originalname,filename} = req.file;
      console.log(filename);
      

    const result = await createProductService.execute({
      name,
      price,
      description,
      banner:'',
      category_id,
    })
      return res.status(200).json(result);
  }
  }
}
export {CreateProductController};