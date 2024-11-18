import mongoose from "mongoose";

const connectdb = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB Connected")
    })
    await mongoose.connect(`${process.env.MONGOOB_URI}/E_Commerce`)
}
 
export default connectdb;

 