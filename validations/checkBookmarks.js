// Added checkName as per end of 2nd lesson
// const checkName = (req, res, next) => {
//     console.log("checking name...");
//   };
  
//   module.exports = { checkName };

const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
}

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    // .23.23 class: can try this instead of the long code below: if [“true”, “false”, true, false, undefined].includes(is_favorite)
    if (
      is_favorite == "true" ||
      is_favorite == "false" ||
      is_favorite == undefined

    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
};

const validateURL = (req, res, next) => {
    if (
      req.body.url.substring(0, 7) === "http://" ||
      req.body.url.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: `You forgot to start your url with http:// or https://` });
    }
  };
      
module.exports = { checkBoolean, checkName, validateURL };


//   module.exports = { checkBoolean, checkName };
