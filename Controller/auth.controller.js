const User  = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const authController = {
    async register(req, res) {
       try {
          const hashedpassword = await bcrypt.hash(req.body.password, 10)
          const newUser = new User({
             ...req.body,
             password: hashedpassword
 
          });
          await newUser.save();
          res.status(200).json('Registered Successfully')
 
       } catch (err) {
          res.status(500).json(err)
 
       }
    },
    async login(req, res, next) {
       try {
          const user = await User.findOne({ username: req.body.username })
 
          if (!user) {
             return res.status(404).json('user Not found')
          }
 
          const ispasswd = await bcrypt.compare(req.body.password, user.password);
          if (!ispasswd) {
             return  res.status(404).json('Invalid username or password')
          }
 
          const token = jwt.sign({ id: user._id, isSeller: user.isSeller }, process.env.JWT_SECRET)
 
          //console.log('login success')
          res.cookie("accessToken", token, {
             httpOnly: true,
          }).status(200).json(user)
 
       } catch (err) {
          res.status(400).json("Something went Wrong");
          console.log(err)
       }
    },
    async logout(req,res){
      res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User has been logged out.");
    }
  
 }
 
 module.exports = authController