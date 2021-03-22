const { Router } = require("express");

const router = Router();

const tripsController = require("../controllers/trips");

// (GET) => /api/trips
router.get("/trips", tripsController.getTrips);

module.exports = router;
