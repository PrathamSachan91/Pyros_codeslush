const mongoose = require('mongoose');
const { Schema } = mongoose;
const BankSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  // email:{
  //   type:string,
  //   required:true
  // },
  image:{
    type:String,
    required:true
  },
  age:{
    type:Number,
  },
  bloodGroup:{
    type:String,
    required:true
  },
});
module.exports=mongoose.model('Bank',BankSchema)
