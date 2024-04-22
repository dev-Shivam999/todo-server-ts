import express, { Request, Response } from 'express'
import UserModel, { Todo } from '../Models/Models'


const route=express.Router()

type da={data:Todo}
type a={data:string}

route.get('/data',async(req:Request, res:Response) => {
    const Data=await UserModel.find();
    res.json({data:Data})

})
route.post('/get',async(req:Request,res:Response) => {
const {data}:da=req.body
await UserModel.create({
    title: data.title,
})

res.json({success:true})

})
route.post('/check',async(req:Request,res:Response) => {
const {data}:a=req.body
const val:Todo|null = await UserModel.findById(data)

if (val) {
    
    await UserModel.findByIdAndUpdate(data, { $set: { isActive: !val.isActive }} )
    
    res.json({success:true})
}

})
route.post('/change',async(req:Request,res:Response) => {
const {data}:da=req.body

    
    await UserModel.findByIdAndUpdate(data._id, { $set: { title: data.title, isEditable :false}} )
    
    res.json({success:true})
}

)
route.post('/edit',async(req:Request,res:Response) => {
const {data}:a=req.body
const val:Todo|null = await UserModel.findById(data)

if (val) {
    
    await UserModel.findByIdAndUpdate(data, { $set: { isEditable: !val.isEditable }} )
    
    res.json({success:true})
}

})

route.delete('/del/:id',async(req:Request,res:Response) => {
    const data =req.params
    const d=data.id
await UserModel.findByIdAndDelete({
   _id:d
})

res.json({success:true})

})

export default route