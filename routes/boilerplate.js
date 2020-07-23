const router = express.Router();
const boilerPlateController = require("../controllers/boilerPlateController");

// router.get("/",);

// router.put("/:id");

router.post("/", boilerPlateController.createBoilerPlate);

// router.delete("/");

module.exports = router;
