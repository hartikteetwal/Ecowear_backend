import userModel from "../models/userModel.js"


// Add products to user cart 
 const addToCart = async(req,res)=>{ 
    try {
        const {userId,itemId,Size} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        if(cartData[itemId]){
            if(cartData[itemId][Size]){
                cartData[itemId][Size] += 1
            }
            else{
                cartData[itemId][Size] = 1
            }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId][Size] = 1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Added To Cart"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
 } 
// update user cart 
 const updateCart = async(req,res)=>{
    try {
        const {userId, itemId, Size, quantity} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        cartData[itemId][Size] = quantity

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Cart Updated"})
 

    } catch (error) {
        res.json({success:false,message:error.message})
    }
 }
// get user cart data
 const getUserCart = async(req,res)=>{
    try {
        const {userId}  = req.body
        

        const userData = await  userModel.findById(userId)
        let cartData = await userData.cartData

        res.json({success:true,cartData}) 

    } catch (error) {         
        res.json({success:false,message:error.message})
    }

 }
 
 export {addToCart,updateCart,getUserCart}