const  mongoose=require('mongoose')
const proSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    catagory:{
        type:String,
        required:true
    }

   })
module.exports=mongoose.model("products",proSchema
)