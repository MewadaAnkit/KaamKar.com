const Gig = require('../Model/gig.model')
const createError = require('../utils/createError')
const GigController = {

  async createGig(req,res,next){
    if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));
  
  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });
  
  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
  },
   

    async deleteGig(req,res,next){
        try {
            const gig = await Gig.findById(req.params.id);
            if (gig.userId !== req.userId)
              return next(createError(403, "You can delete only your gig!"));
        
            await Gig.findByIdAndDelete(req.params.id);
            res.status(200).send("Gig has been deleted!");
          } catch (err) {
            next(err);
          }
    },


    async getGig(req,res,next){
      try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) next(createError(404, "Gig not found!"));
        res.status(200).send(gig);
      } catch (err) {
        next(err);
      }
    },


    async getGigs(req, res, next) {
        const q = req.query;
        const filters = {
          ...(q.userId && { userId: q.userId }),
          ...(q.cat && { cat: q.cat }),
          ...((q.min || q.max) && {
            price: {
              ...(q.min && { $gt: q.min }),
              ...(q.max && { $lt: q.max }),
            },
          }),
          ...(q.search && { title: { $regex: q.search, $options: "i" } }),
        };
        //console.log(filters)
        try {
          const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
          res.status(200).send(gigs);
        } catch (err) {
          next(err);
        }
      }

}


module.exports = GigController


 
 