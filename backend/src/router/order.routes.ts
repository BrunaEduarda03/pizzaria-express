import { Router } from "express";
import { AddItemController } from "../controllers/order/AddItem.controller";

import { CreateOrderController } from "../controllers/order/CreateOrder.controller";
import { DetailOrderController } from "../controllers/order/DetailOrder.controller";
import { FinishOrderController } from "../controllers/order/FinishOrder.controller";
import { ListOrdersController } from "../controllers/order/ListOrder.controller";
import { RemoveItemController } from "../controllers/order/RemoveItem.controller";
import { RemoveOrderController } from "../controllers/order/RemoveOrder.controller";
import { SendOrderController } from "../controllers/order/SendOrder.controller";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const orderRouter = Router();

const createOrderController = new CreateOrderController();

const removeOrderController = new RemoveOrderController();

const addItemController = new AddItemController();

const removeItemController = new RemoveItemController();

const sendOrderController = new SendOrderController();

const listOrdersController = new ListOrdersController();

const detailOrderController = new DetailOrderController();

const finishOrderController = new FinishOrderController();

orderRouter.get('/order',tokenAutentication,listOrdersController.handle);

orderRouter.post('/order',tokenAutentication,createOrderController.handle);

orderRouter.delete('/order',tokenAutentication,removeOrderController.handle);

orderRouter.post('/order/add',tokenAutentication,addItemController.handle);

orderRouter.delete('/order/remove',tokenAutentication,removeItemController.handle);

orderRouter.put('/order/send',tokenAutentication,sendOrderController.handle);

orderRouter.get('/order/details',tokenAutentication,detailOrderController.handle);

orderRouter.put('/order/finish',tokenAutentication,finishOrderController.handle);

export default orderRouter;
