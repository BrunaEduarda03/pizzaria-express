import { Router } from "express";
import multer from "multer";
import { CreateProductController } from "../controllers/product/CreateProduct.controller";
import { tokenAutentication } from "../middlewares/tokenAutentication";
import uploadConfig from '../config/multer'; 

const productRouter = Router();

const upload = multer(uploadConfig.upload('./tmp'));

const createProductController = new CreateProductController();

productRouter.post('/product',tokenAutentication,upload.single('file'),createProductController.handle);

export default productRouter;