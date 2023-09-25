const mongoose=require('mongoose');

const dashboardSchema=mongoose.Schema({
   firstname:String,
   lastname:String,
   email:String,
   department:String,
   salary:Number,
 user:String,
 userId:String
    
},
{
    versionKey:false
})
const dashboardModel=mongoose.model('dashboard',dashboardSchema);

module.exports={
    dashboardModel
}