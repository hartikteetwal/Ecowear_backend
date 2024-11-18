import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Array,required:true},
    Category:{type:String,required:true},
    SubCategory:{type:String,required:true},
    sizes:{type:Array,required:true},
    BestSeller:{type:Boolean},
    date:{type:Number,required:true},

})

const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel;