import React from "react";
import styled from "styled-components";

const S = {};

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

const Input = (props) => {
  return <S.Input {...props} />;
};

export default Input;
