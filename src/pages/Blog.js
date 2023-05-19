import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import { blogData } from "./blogData";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const renderContentWithLineBreaks = (content) => {
    const lines = content.split("\n");
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const { id } = useParams();
  const data = blogData.find((data) => data.id === parseInt(id));
  const bg = ["#FFC066", "#FF866A", "#8DCCD6"];
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container>
        <Heading>
          <Span onClick={() => navigate(-1)}>Blogs / </Span>
          <Title>{data.title}</Title>
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
                <Date>{data.date}</Date>
              </Details>
            </Header>
            <BlogImage src="/images/Blog-temp.png" />
          </Left>
          <Right>
            <Desc>{renderContentWithLineBreaks(data.content)}</Desc>
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
  line-height: 27px;
  cursor: pointer;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  /* text-align: justified; */
`;

export default Blog;
