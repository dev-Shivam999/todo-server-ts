import mongoose from "mongoose";



export const Db=async()=>{
   try {
       await mongoose.connect("mongodb://127.0.0.1:27017/TsTodo")
       console.log("db connection established");
       
   } catch (error) {
    console.log("db connection error" + error);
    
   }
}