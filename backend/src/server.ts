import express,{NextFunction, Request,Response} from "express";
import 'express-async-errors';
import cors from 'cors';
import userRouter from "./router/user.router";
import categoryRouter from "./router/category.router";
import productRouter from "./router/product.router";
import path from 'path';
import orderRouter from "./router/order.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(orderRouter);

app.use('/files',express.static(path.resolve(__dirname, '..','tmp')));

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({error:err.message});
  }
  return res.status(500).json({
    status:'error',
    message:'internal server error'
  });
})

app.listen(3333,()=>{
  console.log(`servidor on-line em http://localhost:${process.env.PORT}`);
  
});