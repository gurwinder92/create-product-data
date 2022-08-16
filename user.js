const model = require('../model/productmodel')
async function postproduct(req,res){
    const prdata = {
       name:req.body.name,
        price:req.body.price,
        catagory:req.body.catagory
    }
    const post = await model.create(prdata)
    return res.status(200).send({
        msg:'ok',
        data:post
    })
}

async function getproduct(req,res){
    const get =await model.findById(req.body.id)
    return res.status(200).send({
        msg:"ok",
        data:get
    })
}

async function updateproduct(req,res){     
    let check = await model.findOne({_id:req.body._id}) 
    if(check){
      let change = await model.findByIdAndUpdate({_id:req.body._id},{
        name:req.body.name,
       price:req.body.price,
       catagory:req.body.catagory
   },{upsert:true, new:true})
       return res.status(200).send({
           msg:"ok",
           data:change
        })
    }
   }

   async function deleteproduct(req,res){
    let del =await model.findByIdAndDelete(req.body._id)
    return res.status(200).send({
        msg:"ok",
        data:del
    })
   }

  
     
module.exports = {
    postproduct,
    getproduct,
    updateproduct,
    deleteproduct,
}