import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  margin-bottom: 55px;
  /* @media (max-width: 1024px) {
    flex-direction: column;
  } */
`;

const P = styled.p`
  color: grey;
  font-size: 18px;
  margin-top: 10px;
`;

const Trip = (props) => {
  const { title, description, photos, url } = props;
  return (
    <Container>
      <img
        src={photos[0]}
        alt=""
        style={{
          width: "30%",
          objectFit: "cover",
          padding: "15px",
          borderRadius: "40px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            marginBottom: "15px",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div>
            <a
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            <P>
              {description.split("\n")[0]} ...{" "}
              <a
                href={url}
                style={{
                  color: "#2c9cda",
                }}
              >
                อ่านต่อ
              </a>
            </P>
          </div>
          <p
            style={{
              color: "grey",
              fontSize: "16px",
            }}
          >
            หมวด: จุดถ่ายรูป ต่างประเทศ ไต้หวัน และ ธรรมชาติ
          </p>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          {photos.slice(1).map((photo) => (
            <img
              src={photo}
              alt=""
              style={{
                width: "150px",
                height: "150px",
                marginRight: "15px",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Trip;
