const boilerplateModel = require("../models/boilerPlateModel");

module.exports = boilerplateServices = {
  createBoylerPLate: (Name, email, age) => {
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
