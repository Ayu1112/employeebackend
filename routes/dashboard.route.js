const express = require('express');
const {auth}  = require('../middleware/auth.middleware');
const { dashboardModel } = require('../models/dashboard.model');

const dashboardRouter=express.Router();
dashboardRouter.use(auth)

dashboardRouter.post("/employees",async(req,res)=>{
try {
    const employe=new dashboardModel(req.body)
    await employe.save();
    res.json({msg:"New employe created",employe:req.body})
} catch (err) {
    res.json({msg:"Error while creating employe",error:err.message})
}
})

dashboardRouter.patch("/update/:employeeID",async(req,res)=>{
    const userIDinUserDoc=req.body.userId;
    console.log(userIDinUserDoc,"a")
const {employeeID} = req.params
console.log(req.params,"b")
   try {
    const employee= await dashboardModel.findOne({_id:employeeID})
    console.log(employee,"swdw","c")
    const userIDinpostDoc=employee.userId;
    console.log(userIDinpostDoc,"d")
    if(userIDinUserDoc === userIDinpostDoc){
        
        await dashboardModel.findByIdAndUpdate({_id:employeeID},req.body)
       res.json({msg:`${employee.name} has been updated`})
    }else{
        res.json({msg:"Not Authorized!!"})
    }
   } catch (err) {
    res.json({error:err})
   }
})







dashboardRouter.delete("/delete/:employeeID", async(req,res)=>{
    const userIDinUserDoc=req.body.userId;
    console.log(userIDinUserDoc,"a")
const {employeeID} = req.params
console.log(employeeID)
   try {
    const employee= await dashboardModel.findOne({_id:employeeID})
    console.log(employee,"b")
    const userIDinpostDoc=employee.userId;
    console.log(userIDinpostDoc,"c")
    if(userIDinUserDoc === userIDinpostDoc){
          
        await dashboardModel.findByIdAndDelete({_id:employeeID},req.body)
       res.json({msg:`${employee.name} has been Deleted`})
    }else{
        res.json({msg:"Not Authorized!!"})
    }
   } catch (err) {
    res.json({error:err})
   }
})


module.exports={
    dashboardRouter
}