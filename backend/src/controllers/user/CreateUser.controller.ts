import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUser.services";

class CreateUserController {
  async registration(req:Request,res:Response) {
    const {name,email,password} = req.body;
    const createuserService = new CreateUserService();
    const user = await createuserService.createUser({name,email,password});
    return res.status(200).json(user);
  }
}

export {CreateUserController}

/*const loginController = async (req: Request, res: Response) => {
  const { type, message } = await LoginService(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
};*/ 