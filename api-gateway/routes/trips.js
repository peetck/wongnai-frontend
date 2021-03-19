const { Router } = require("express");

const router = Router();

const tripsController = require("../controllers/trips");

router.get("/trips", tripsController.getTrips);

module.exports = router;
