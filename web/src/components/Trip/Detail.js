import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
  margin-top: 10px;
`;

S.Title = styled.a`
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
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

const Detail = (props) => {
  const { title, url, description } = props;

  return (
    <S.Container>
      <S.Title href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </S.Title>
      <S.Description>
        {description.split("\n")[0]} ...{" "}
        <S.ReadMore href={url} target="_blank" rel="noopener noreferrer">
          อ่านต่อ
        </S.ReadMore>
      </S.Description>
    </S.Container>
  );
};

export default Detail;
