import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useQuery } from "../hooks/query";
import Trip from "../components/Trip";
import Loader from "../components/Loader";

const S = {};

S.Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

S.Title = styled.p`
  margin-top: 1em;
  font-size: 60px;
  color: #2c9cda;
  text-align: center;
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  @media (max-width: 1024px) {
    width: 70%;
  }
`;

S.Input = styled.input`
  border: 0;
  border-bottom: 1.5px solid #a1a1a1;
  text-align: center;
  font-size: 20px;
  font-weight: lighter;
  margin: 25px 0 35px 0;
  width: 90%;
  &:focus {
    outline: none;
    border-bottom-color: #2c9cda;
  }
`;

S.NotFound = styled.p`
  display: flex;
  height: 450px;
  justify-content: center;
  align-items: center;
  color: #a1a1a1;
  text-align: center;
  font-weight: lighter;
  font-size: 25px;
`;

const URL = "http://localhost:8000/api/trips";

const Home = () => {
  const history = useHistory();
  const query = useQuery();

  console.log(S);

  const [keyword, setKeyword] = useState(query.get("keyword") ?? "");
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrips = useCallback(async () => {
    try {
      const response = await fetch(`${URL}?keyword=${keyword}`);
      if (response.status !== 200) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();
      setTrips(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [keyword]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(async () => {
      await fetchTrips();
      setIsLoading(false);
    }, 300);

    // if this effect run again, because keyword changed, we remove the previous timeout
    return () => clearTimeout(timeout);
  }, [keyword, fetchTrips]);

  const keywordChangeHandler = (kw) => {
    setKeyword(kw);
    query.set("keyword", kw);
    history.replace({
      search: query.toString(),
    });
  };

  return (
    <S.Page>
      <S.Title>เที่ยวไหนดี</S.Title>
      <S.Container>
        <S.Input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={keyword}
          onChange={(e) => keywordChangeHandler(e.target.value)}
        />
        {isLoading ? (
          <Loader />
        ) : trips.length !== 0 ? (
          trips.map((trip) => (
            <Trip
              key={trip.eid}
              eid={trip.eid}
              title={trip.title}
              description={trip.description}
              photos={trip.photos}
              url={trip.url}
              tags={trip.tags}
              categoryClickedHandler={(e) =>
                keywordChangeHandler(e.target.textContent)
              }
            />
          ))
        ) : (
          <S.NotFound>ไม่พบที่เที่ยว</S.NotFound>
        )}
      </S.Container>
    </S.Page>
  );
};

export default Home;
