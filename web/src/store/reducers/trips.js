import { SET_TRIPS } from "../actions/trips";

const initialState = {
  trips: [],
};

const setTrip = (state, action) => {
  const trips = action.trips;
  return {
    ...state,
    trips: trips,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return setTrip(state, action);
    default:
      return state;
  }
};

export default reducer;
