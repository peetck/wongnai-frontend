import React from "react";
import styled from "styled-components";

const S = {};

S.AltMessage = styled.p`
  display: flex;
  height: 450px;
  justify-content: center;
  align-items: center;
  color: #a1a1a1;
  text-align: center;
  font-weight: lighter;
  font-size: 25px;
`;

S.Reload = styled.a`
  color: #2c9cda;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.7;
  }
`;

const Alt = (props) => {
  const { message, withReload } = props;

  return (
    <S.AltMessage>
      <span>
        {message} <br />
        {withReload && (
          <S.Reload onClick={() => window.location.reload()}>โหลดใหม่</S.Reload>
        )}
      </span>
    </S.AltMessage>
  );
};

export default Alt;
