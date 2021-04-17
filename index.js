const express = require("express");
const bodyParser = require('body-parser') ; 
const cors = require('cors') ; 
const mongoose = require('mongoose') ; 
const userRoute = require('./routes/user.routes') ; 
const produitRoute = require('./routes/produit.routes') ;
const colorRoute = require('./routes/color.routes') ;
const magasinRoute = require('./routes/magasin.routes'); 
const projectRoute = require('./routes/project.routes'); 
const usersAppsRoute = require('./routes/usersApps.routes'); 
require('dotenv').config()
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false})) ; 
app.use(cors()) ; 

// use all routes here 
app.use('/users',userRoute); 
app.use('/produit',produitRoute);
app.use('/color',colorRoute);  
app.use('/magasins',magasinRoute); 
app.use('/project',projectRoute); 
app.use('/usersApps',usersAppsRoute);



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('connected to database...')

}).catch(err=>{
    console.log(err.message)
})
app.listen(3001, () => {
  console.log("app is running...");
});
