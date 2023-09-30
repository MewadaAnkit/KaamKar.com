const User  = require('../Model/User.js')
const createError  = require("../utils/createError.js");



const UserController = {
    async deleteUser(req , res , next){
      const user = await User.findById(req.params.id);

      if (req.userId !== user._id.toString()) {
        return next(createError(403, "You can delete only your account!"));
      }
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("deleted.");
    },
    async getUser(req,res,next){
      
      const user = await User.findById(req.params.id);

      res.status(200).send(user);
    }
}





module.exports = UserController