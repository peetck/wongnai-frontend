import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  const [keyword, setKeyword] = useState("");
  const [trips, setTrips] = useState([]);

  const fetchTrips = useCallback(async () => {
    const response = await fetch(
      `http://localhost:8000/api/trips?keyword=${keyword}`
    );
    const data = await response.json();
    setTrips(data);
  }, [keyword]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return (
    <Div>
      <h1>เที่ยวไหนดี</h1>
      <input
        type="text"
        name=""
        id=""
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {trips.map((trip) => (
        <div key={trip.eid}>
          <h3>{trip.title}</h3>
          <img src={trip.photos[0]} alt="can't fetch img" width="200" />
          <img src={trip.photos[1]} alt="can't fetch img" width="200" />
          <img src={trip.photos[2]} alt="can't fetch img" width="200" />
          <img src={trip.photos[3]} alt="can't fetch img" width="200" />
        </div>
      ))}
    </Div>
  );
}

export default App;
