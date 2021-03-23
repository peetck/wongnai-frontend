import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "../hooks/query";
import Trip from "../components/Trip/Trip";
import Loader from "../components/Loader";
import { fetchTrips } from "../store/actions/trips";
import Input from "../components/Input";
import Alt from "../components/Alt";
import { primaryColor } from "../shared/colors";

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
  color: ${primaryColor};
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

const Home = () => {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();

  // get keyword from query params
  const [keyword, setKeyword] = useState(query.get("keyword") ?? "");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // get trips state
  const trips = useSelector((state) => state.trips);

  useEffect(() => {
    setIsLoading(true);
    // start fetch trips only when user stops typing (300 milliseconds)
    const timeout = setTimeout(async () => {
      try {
        // dispatch fetchTrips action
        await dispatch(fetchTrips(keyword));
      } catch (error) {
        // error occurred
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, 300);
    // if this effect run again, because keyword changed, we remove the previous timeout
    return () => clearTimeout(timeout);
  }, [keyword, dispatch]);

  const keywordChangeHandler = (kw) => {
    setKeyword(kw);
    // set query params (keyword)
    query.set("keyword", kw);
    history.replace({
      search: query.toString(),
    });
  };

  let content;

  if (isLoading) {
    // loading
    content = <Loader />;
  } else if (isError) {
    // error occurred
    content = <Alt message="เกิดข้อผิดพลาดบางอย่าง" withReload />;
  } else if (trips.length === 0) {
    // not found any trip
    content = <Alt message="ไม่พบที่เที่ยว" />;
  } else {
    // found
    content = trips.map((trip) => (
      <Trip
        key={trip.eid}
        eid={trip.eid}
        title={trip.title}
        description={trip.description}
        photos={trip.photos}
        url={trip.url}
        tags={trip.tags}
        keywordChangeHandler={(e) => keywordChangeHandler(e.target.textContent)}
      />
    ));
  }

  return (
    <S.Page>
      <S.Title>เที่ยวไหนดี</S.Title>
      <S.Container>
        <Input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={keyword}
          onChange={(e) => keywordChangeHandler(e.target.value)}
        />
        {content}
      </S.Container>
    </S.Page>
  );
};

export default Home;
