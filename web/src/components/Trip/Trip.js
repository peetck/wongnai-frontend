import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import Detail from "./Detail";

const S = {};

S.TripContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  margin-bottom: 55px;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

S.MainImage = styled.img`
  width: 30%;
  object-fit: cover;
  padding: 15px;
  border-radius: 40px;
  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
    padding: 15px 0;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 640px) {
    height: 300px;
  }
`;

S.Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
`;

S.Content = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

S.OtherImages = styled.div`
  display: flex;
`;

S.Image = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 15px;
  object-fit: cover;
  border-radius: 40px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Trip = (props) => {
  const {
    eid,
    title,
    description,
    photos,
    url,
    keywordChangeHandler,
    tags,
  } = props;

  const images = photos
    .slice(1)
    .map((photo) => (
      <S.Image key={photo} src={photo} alt="unable to load image" />
    ));

  return (
    <S.TripContainer>
      <S.MainImage src={photos[0]} alt="unable to load image" />
      <S.Container>
        <S.Content>
          <Detail title={title} description={description} url={url} />
          <Categories
            tags={tags}
            eid={eid}
            keywordChangeHandler={keywordChangeHandler}
          />
        </S.Content>
        <S.OtherImages>{images}</S.OtherImages>
      </S.Container>
    </S.TripContainer>
  );
};

export default Trip;
