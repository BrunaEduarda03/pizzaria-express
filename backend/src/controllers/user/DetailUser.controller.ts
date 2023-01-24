import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUser.services";

class DetailUserController{
  async handleDetail(req:Request, res:Response){
    const user_id = req.user_id;
    
    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(user_id);
    return res.json(user);
  }
}
export {DetailUserController};