const { Router } = require("express");

const router = Router();

const tripsController = require("../controllers/trips");

// (GET method) route path => /api/trips
router.get("/trips", tripsController.getTrips);

module.exports = router;
