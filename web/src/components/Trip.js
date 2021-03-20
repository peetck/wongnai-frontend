import React from "react";
import styled from "styled-components";

const TripContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  margin-bottom: 55px;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

const MainImage = styled.img`
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

const Detail = styled.div`
  margin-top: 10px;
`;

const Title = styled.a`
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.7;
  }
`;

const Description = styled.p`
  color: #a1a1a1;
  font-size: 18px;
  margin-top: 10px;
  font-weight: lighter;
`;

const ReadMore = styled.a`
  color: #2c9cda;
  &:hover {
    opacity: 0.7;
  }
`;

const Categories = styled.p`
  color: #a1a1a1;
  font-size: 16px;
  font-weight: lighter;
  margin: auto 0;
  @media (max-width: 1024px) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const Underline = styled.span`
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Image = styled.img`
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
    tags,
    categoryClickedHandler,
  } = props;

  return (
    <TripContainer>
      <MainImage src={photos[0]} alt="unable to load image" />
      <Container>
        <Content>
          <Detail>
            <Title href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </Title>
            <Description>
              {description.split("\n")[0]} ...{" "}
              <ReadMore href={url} target="_blank" rel="noopener noreferrer">
                อ่านต่อ
              </ReadMore>
            </Description>
          </Detail>
          <Categories>
            หมวด :{" "}
            {tags.slice(0, tags.length - 1).map((tag) => (
              <span key={eid + tag}>
                <Underline onClick={categoryClickedHandler}>{tag}</Underline>{" "}
              </span>
            ))}
            และ{" "}
            <Underline onClick={categoryClickedHandler}>
              {tags[tags.length - 1]}
            </Underline>
          </Categories>
        </Content>
        <Flex>
          {photos.slice(1).map((photo) => (
            <Image key={photo} src={photo} alt="unable to load image" />
          ))}
        </Flex>
      </Container>
    </TripContainer>
  );
};

export default Trip;
