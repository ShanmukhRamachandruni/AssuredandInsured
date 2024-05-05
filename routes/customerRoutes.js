import express from 'express';

import {getCustomerController, getSingleCustomerController, productPhotoController } from '../controllers/customerController.js';

const router = express.Router()




router.get('/get-customer',getCustomerController);
router.get('/get-customer/:pid',getSingleCustomerController);
router.get("/product-photo/:pid", productPhotoController);
//router.put('/update-customer/:cid',requireSignIn,isAdmin,updateCustomerController);


export default router