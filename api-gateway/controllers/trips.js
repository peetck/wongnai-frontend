const fetch = require("node-fetch");

exports.getTrips = async (req, res, next) => {
  // get query parameters
  const keyword = req.query.keyword.toLowerCase();

  // send request to JSON Server
  const response = await fetch("http://localhost:9000/trips");
  const trips = await response.json();

  if (keyword) {
    const filteredTrips = trips.filter(
      (trip) =>
        trip.title.toLowerCase().includes(keyword) ||
        trip.description.toLowerCase().includes(keyword) ||
        // TODO: tags lower case
        trip.tags.includes(keyword)
    );
    return res.json(filteredTrips);
  }

  return res.json(trips);
};
