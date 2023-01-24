import { NextFunction, Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategory.services";

class CreateCategoryController{
  async handle(req: Request, res: Response,next:NextFunction){
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(req.body);
    return res.json(category);
  }

} 

export {CreateCategoryController};