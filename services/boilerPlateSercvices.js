const boilerplateModel = require("../models/boilerPlateModel");

module.exports = boilerplateServices = {
  createBoylerPLate: (Name, email, age) => {
    console.log("MAIS UM CONSOLE.LOG")
    return new Promise((resolve, reject) => {
      const newBoylerPlate = new boilerplateModel({
        Name,
        email,
        age,
      }).save();
      newBoylerPlate
        .then((boilerPlate) => {
          resolve(boilerPlate);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
