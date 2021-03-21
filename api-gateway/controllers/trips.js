const fetch = require("node-fetch");

const URL = "http://localhost:9000/trips";

exports.getTrips = async (req, res, next) => {
  try {
    // get query parameters
    const keyword = req.query.keyword.toLowerCase().trim();

    // send request to JSON Server
    const response = await fetch(URL);

    if (response.status !== 200) {
      throw new Error(`Can't fetch trips from ${URL}`);
    }

    const trips = await response.json();

    if (keyword) {
      const filteredTrips = trips.filter(
        (trip) =>
          trip.title.toLowerCase().includes(keyword) ||
          trip.description.toLowerCase().includes(keyword) ||
          trip.tags.reduce(
            (found, tag) => found || tag.toLowerCase().includes(keyword),
            false
          )
      );
      return res.json(filteredTrips);
    } else {
      // keyword is empty
      return res.json(trips);
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
