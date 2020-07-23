const struct = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = db.model("boilerplate", struct);
