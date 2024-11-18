import express from 'express'
import { placeOrderRazorpay, placeOrder,placeStripe,allOrders,userOrders,updateStatus, verifStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
 
// User feature
orderRouter.post('/userorders',authUser,userOrders)

// verify payment
orderRouter.post('/verifyStripe',authUser,verifStripe)

export default orderRouter 

