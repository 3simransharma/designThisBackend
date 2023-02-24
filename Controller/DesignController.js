const Design = require("../models/DesignSchema");
const catchAsyncError = require("../middleware/catchAsyncErrors");

//Get Random Design Description
exports.getDesign = catchAsyncError(async(req,res,next) => {
    Design.countDocuments((err, count) => {
        if (err) throw err;

        const randomIndex = Math.floor(Math.random() * count);
        
        Design.findOne().skip(randomIndex).exec((err, result) => {
          if (err) throw err;
        //   console.log(result);
          res.send(result);
        });
      });
});