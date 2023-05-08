import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const NewsLetter = () => {
  const bg = ["#FFC066", "#FF866A", "#8DCCD6"];
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container>
        <Heading>
          <Span onClick={() => navigate(-1)}>Newsletters / </Span>
          <Title> Title of the Newsletter</Title>
        </Heading>
        <Content>
          <Left
            style={{
              backgroundColor: bg[Math.floor(Math.random() * bg.length)],
            }}
          >
            <Header>
              <Image src={"/images/Author.png"} />
              <Details>
                <Author>Kalative</Author>
                <Date>April 20, 2023</Date>
              </Details>
            </Header>
            <BlogImage src="/images/Blog-temp.png" />
          </Left>
          <Right>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Desc>
          </Right>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  color: #939393;
  margin-right: 0.4rem;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;
const Title = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background: #ffc066;
`;
const Right = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Details = styled.div``;
const Image = styled.img``;
const BlogImage = styled.img``;
const Author = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  margin: 0;
  /* text-align: left; */
  color: #000;
`;
const Date = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  /* text-align: left; */
  color: #636363;
  margin: 0;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  /* text-align: justified; */
`;

export default NewsLetter;
