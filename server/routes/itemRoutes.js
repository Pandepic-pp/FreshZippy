const express=require('express'); 
const route=express.Router();
const {items}=require('../controller/itemController');
route.get('/',items); 
module.exports=route; 