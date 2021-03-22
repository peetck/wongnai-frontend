export const SET_TRIPS = "SET_TRIPS";

export const fetchTrips = (keyword) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8000/api/trips?keyword=${keyword}`
    );
    if (response.status !== 200) {
      throw new Error("Something went wrong.");
    }
    const trips = await response.json();

    dispatch({
      type: SET_TRIPS,
      trips: trips,
    });
  };
};
