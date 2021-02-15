// import {createError} from "@typescript-eslint/typescript-estree/dist/node-utils";

const createError = require('http-errors');

let express =require('express');
let mongoose =require('mongoose');
let cors = require('cors');
let bodyParser =require('body-parser');
let dbConfig =require('./database/db.js');

//express route
const vehicleRoute =require('../backend/routes/vehicle.route')

//mongo database connection

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log("database successfully connected")
},
error=>{
    console.log("Can not connect"+error)
})

const  app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(cors());

app.use('/vehicles',vehicleRoute)

//port
const port =process.env.PORT ||4000;
const server =app.listen(port,()=>{
    console.log("connected to 4000 port")
})

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});