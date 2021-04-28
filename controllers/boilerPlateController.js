const boilerPlateServices = require("../services/boilerPlateSercvices");

module.exports = boilerPlateController = {
  createBoilerPlate: (req, res) => {
    let { name, age, email } = req.body;
    console.log("OLÁ MUNDO !")

    boilerPlateServices
      .createBoylerPLate(name, email, age)
      .then((boiler) => {
        res.json({
          success: true,
          info: boiler,
          message: "OK",
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "deu ruim" + err,
        });
      });
  },
};
