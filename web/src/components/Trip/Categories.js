import React from "react";
import styled from "styled-components";

import { perfectGrayColor } from "../../shared/colors";

const S = {};

S.Container = styled.div`
  color: ${perfectGrayColor};
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

const Categories = (props) => {
  const { tags, eid, keywordChangeHandler } = props;

  const categories = tags.map((tag, index) => (
    <span key={eid + tag}>
      <S.Underline onClick={keywordChangeHandler}>{tag}</S.Underline>
      {index === tags.length - 2 ? " และ " : " "}
    </span>
  ));

  return <S.Container>หมวด : {categories}</S.Container>;
};

export default Categories;
