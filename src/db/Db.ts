import mongoose from "mongoose";


export const Db=async()=>{
   try {
       await mongoose.connect("mongodb+srv://shivamswami982:L7rfMGUbNPfuP6bf@cluster0.ehk20qt.mongodb.net/TsTodo")
       console.log("db connection established");
       
   } catch (error) {
    console.log("db connection error" + error);
    
   }
}