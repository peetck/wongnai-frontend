import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useQuery } from "../hooks/query";
import Trip from "../components/Trip";

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
  border-bottom: 1.5px solid grey;
  text-align: center;
  font-size: 20px;
  margin: 25px 0 35px 0;
  width: 90%;
  &:focus {
    outline: none;
    border-bottom-color: #2c9cda;
  }
`;

const Home = (props) => {
  const history = useHistory();
  const query = useQuery();

  const [keyword, setKeyword] = useState(
    query.has("keyword") ? query.get("keyword") : ""
  );
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

  const categoryClickedHandler = (e) => {
    const category = e.target.textContent;
    setKeyword(category);
    query.set("keyword", category);
    history.replace({
      search: query.toString(),
    });
  };

  const inputHandler = (e) => {
    setKeyword(e.target.value);
    query.set("keyword", e.target.value);
    history.replace({
      search: query.toString(),
    });
  };

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
          onChange={inputHandler}
        />
        {trips.length !== 0 ? (
          trips.map((trip) => (
            <Trip
              key={trip.eid}
              eid={trip.eid}
              title={trip.title}
              description={trip.description}
              photos={trip.photos}
              url={trip.url}
              tags={trip.tags}
              categoryClickedHandler={categoryClickedHandler}
            />
          ))
        ) : (
          <h1>ไม่เจอที่เที่ยวเลย มุแง</h1>
        )}
      </Container>
    </Page>
  );
};

export default Home;
