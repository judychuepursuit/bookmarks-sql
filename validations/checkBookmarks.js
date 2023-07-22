// Added checkName as per end of 2nd lesson
// const checkName = (req, res, next) => {
//     console.log("checking name...");
//   };
  
//   module.exports = { checkName };

const checkBoolean = (req, res, next) => {
    if (req.body.is_favorite) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };
  
  module.exports = { checkBoolean, checkName };