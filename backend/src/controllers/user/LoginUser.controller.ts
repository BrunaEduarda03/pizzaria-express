import { Request, Response } from "express";
import { LoginUserService } from "../../services/user/LoginUser.services";

class LoginUserController {
  async signIn(req: Request, res: Response){
    const loginUserService = new LoginUserService();

    const auth = await loginUserService.loginUser(req.body);

    return res.json(auth);
  }
}

export {LoginUserController};