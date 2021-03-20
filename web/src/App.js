import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import Trip from "./components/Trip";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const Title = styled.p`
  margin-top: 1em;
  font-size: 60px;
  color: #2c9cda;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid grey;
  text-align: center;
  font-size: 20px;
  margin: 25px 0 35px 0;
  width: 90%;
  &:focus {
    outline: none;
    border-bottom-color: #2c9cda;
  }
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
    <Page>
      <Title>เที่ยวไหนดี</Title>
      <Container>
        <Input
          type="text"
          name=""
          id=""
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {trips.map((trip) => (
          <Trip
            key={trip.eid}
            title={trip.title}
            description={trip.description}
            photos={trip.photos}
            url={trip.url}
          />
        ))}
      </Container>
    </Page>
  );
}

export default App;
