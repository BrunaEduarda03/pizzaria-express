import { Router } from "express";
import multer from "multer";
import { CreateProductController } from "../controllers/product/CreateProduct.controller";
import { tokenAutentication } from "../middlewares/tokenAutentication";
import uploadConfig from '../config/multer'; 
import { ListByCategoryController } from "../controllers/product/ListByCategory.controller";

const productRouter = Router();

const upload = multer(uploadConfig.upload('./tmp'));

const createProductController = new CreateProductController();

const listByCategoryController = new ListByCategoryController(); 

productRouter.post('/product',tokenAutentication,upload.single('file'),createProductController.handle);

productRouter.get('/category/product',tokenAutentication,listByCategoryController.handle);

export default productRouter;