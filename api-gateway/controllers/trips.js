const fetch = require("node-fetch");

const URL = "http://localhost:9000/trips";

exports.getTrips = async (req, res, next) => {
  try {
    // get query parameters
    const keyword = req.query.keyword;

    // send request to JSON Server
    const response = await fetch(URL);

    if (response.status !== 200) {
      throw new Error(`Can't fetch trips from ${URL}`);
    }

    const trips = await response.json();

    if (keyword) {
      const filteredTrips = trips.filter((trip) => {
        const lcKeyword = keyword.toLowerCase();
        return (
          trip.title.toLowerCase().includes(lcKeyword) ||
          trip.description.toLowerCase().includes(lcKeyword) ||
          trip.tags.includes(lcKeyword)
        );
      });
      return res.json(filteredTrips);
    }

    return res.json(trips);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
