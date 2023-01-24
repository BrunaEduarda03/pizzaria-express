import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategory.services";

class ListCategoryController{
  async handle(req: Request, res: Response){
    const listCategoryService = new ListCategoryService();

    const listCategories = await listCategoryService.execute();
    
    return res.status(200).json(listCategories);
  }
}

export {ListCategoryController};