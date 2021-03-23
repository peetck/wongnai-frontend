import React from "react";
import styled from "styled-components";

import { primaryColor, perfectGrayColor } from "../shared/colors";

const S = {};

S.Input = styled.input`
  border: 0;
  border-bottom: 1.5px solid ${perfectGrayColor};
  text-align: center;
  font-size: 20px;
  font-weight: lighter;
  margin: 25px 0 35px 0;
  width: 90%;
  &:focus {
    outline: none;
    border-bottom-color: ${primaryColor};
  }
`;

const Input = (props) => {
  return <S.Input {...props} />;
};

export default Input;
