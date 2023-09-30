const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  img: {
    type: String,
    required: false,
  },
  country:{
    type:String,
    required:true
  },
  phone: {
    type: String,
    required: false,
  },
  desc:{
    type:String,
    //required:false
  },
  isSeller: {
    type:Boolean,
    default:false
  },
  isAdmin: {
    type:Boolean,
    default:false
  }




},{
    timestamps:true
},{timestamps:true})


const User = mongoose.model('user', UserSchema)

module.exports = User;