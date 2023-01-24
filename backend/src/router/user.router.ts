import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUser.controller";
import { DetailUserController } from "../controllers/user/DetailUser.controller";
import { LoginUserController } from "../controllers/user/LoginUser.controller";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const userRouter = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const detailUserController = new DetailUserController();

userRouter.post('/users' ,createUserController.registration);

userRouter.post('/login' ,loginUserController.signIn);

userRouter.get('/me',tokenAutentication, detailUserController.handleDetail);

export default userRouter;