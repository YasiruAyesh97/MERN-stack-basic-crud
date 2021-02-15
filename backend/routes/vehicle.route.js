let mongoose =require('mongoose');
let express =require('express');
let router =express.Router();

//import vehicle model
let vehicleSchema =require('../Models/Vehicle.js');

//creating vehicle

router.route('/create-vehicle').post((req, res, next) =>{
    vehicleSchema.create(req.body, (error,data) =>{
        if(error){
            console.log("create error")
            return  next(error)
        }else{
            console.log("create route data ")
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req,res,next)=>{
    vehicleSchema.find((error,data)=>{
        if(error){

            return next(error)
        }else{
            res.json(data)
        }
    })
});

//get a particular vehicle
router.route('/edit-vehicle/:id').get((req,res,next)=>{
    vehicleSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});
//update
router.route('/update-vehicle/:id').put((req,res,next)=>{
    vehicleSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data) =>{
        if(error){
            console.log('vehicle not updated!')
            return next(error);
        }else{
            res.json(data)
            console.log('vehicle updated')
        }
    })
});
//delete
router.route('/delete-vehicle/:id').delete((req, res, next) => {
    vehicleSchema.findByIdAndRemove(req.params.id, (error,data)=>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})
module.exports =router