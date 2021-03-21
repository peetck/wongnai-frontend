import React from "react";
import styled from "styled-components";

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

S.Detail = styled.div`
  margin-top: 10px;
`;

S.Title = styled.a`
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.7;
  }
`;

S.Description = styled.p`
  color: #a1a1a1;
  font-size: 18px;
  margin-top: 10px;
  font-weight: lighter;
`;

S.ReadMore = styled.a`
  color: #2c9cda;
  &:hover {
    opacity: 0.7;
  }
`;

S.Categories = styled.p`
  color: #a1a1a1;
  font-size: 16px;
  font-weight: lighter;
  margin: auto 0;
  @media (max-width: 1024px) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

S.Underline = styled.span`
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
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

  // trip detail (title, description)
  const detail = (
    <S.Detail>
      <S.Title href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </S.Title>
      <S.Description>
        {description.split("\n")[0]} ...{" "}
        <S.ReadMore href={url} target="_blank" rel="noopener noreferrer">
          อ่านต่อ
        </S.ReadMore>
      </S.Description>
    </S.Detail>
  );

  // trip categories (tags)
  const categories = (
    <S.Categories>
      หมวด :{" "}
      {tags.map((tag, index) => (
        <span key={eid + tag}>
          <S.Underline onClick={keywordChangeHandler}>{tag}</S.Underline>
          {index === tags.length - 2 ? " และ " : " "}
        </span>
      ))}
    </S.Categories>
  );

  return (
    <S.TripContainer>
      <S.MainImage src={photos[0]} alt="unable to load image" />
      <S.Container>
        <S.Content>
          {detail}
          {categories}
        </S.Content>
        <S.OtherImages>
          {photos.slice(1).map((photo) => (
            <S.Image key={photo} src={photo} alt="unable to load image" />
          ))}
        </S.OtherImages>
      </S.Container>
    </S.TripContainer>
  );
};

export default Trip;
