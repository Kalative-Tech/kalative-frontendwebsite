import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Blogs = () => {
  const Blogdata = [
    {
      id: 1,
      title: "Blog Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolorsit amet",
      date: "Feb 23, 2023",
    },
    {
      id: 2,
      title: "Blog Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolorsit amet",
      date: "Feb 23, 2023",
    },
    {
      id: 3,
      title: "Blog Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolorsit amet",
      date: "Feb 23, 2023",
    },
    {
      id: 4,
      title: "Blog Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolorsit amet",
      date: "Feb 23, 2023",
    },
    {
      id: 5,
      title: "Blog Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolorsit amet",
      date: "Feb 23, 2023",
    },
    {
      id: 6,
      title: "Blog Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolorsit amet",
      date: "Feb 23, 2023",
    },
  ];

  return (
    <>
      <Navbar />

      <BlogsContainer>
        <Heading>Blogs</Heading>
        <BlogGrid>
          {Blogdata.map((blog, index) => (
            <Blog data={blog} key={blog.id} idx={index} />
          ))}
        </BlogGrid>
      </BlogsContainer>
      <Footer />
    </>
  );
};

const Blog = ({ data, idx }) => {
  return (
    <Container>
      <BlogImg src="images/BlogTemp.png" />
      <Title>{data.title}</Title>
      <Date>{data.date}</Date>
      <Body>{data.desc}</Body>
      <Button
        style={{
          backgroundColor:
            idx % 3 === 0
              ? "#FFC066"
              : (idx - 1) % 3 === 0
              ? "#FF866A"
              : "#8DCCD6",
        }}
      >
        Read Now
      </Button>
    </Container>
  );
};

const BlogsContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;
  justify-items: center;
`;

const Heading = styled.p`
  color: #fe5c36;
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  margin: 2rem 0;
  letter-spacing: 0em;
`;

const Container = styled.div`
  width: 320px;
  border: 2px solid #000000;
  border-radius: 19px;
  padding: 1rem;
  min-height: 455px;
`;
const BlogImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin: 1rem 0 0.5rem;
  line-height: 36px;
`;
const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #939393;
  margin: 0;
`;
const Body = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #636363;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background: #ffc066;
  border: 3px solid #1c1b1b;
  border-radius: 12px;
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 18px;
  align-self: center;
  line-height: 27px;
  /* color: #1c1b1b; */
  /* margin: 2rem 0; */
  cursor: pointer;
`;

export default Blogs;
