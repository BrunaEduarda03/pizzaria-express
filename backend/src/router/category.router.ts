import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategory.controller";
import { ListCategoryController } from "../controllers/category/ListCategory.controller";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const categoryRouter = Router();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();

categoryRouter.post('/category',tokenAutentication,createCategoryController.handle);

categoryRouter.get('/category',listCategoryController.handle);

export default categoryRouter;