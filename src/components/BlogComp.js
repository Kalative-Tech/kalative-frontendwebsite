import styled from "styled-components";

const BlogComp = () => {
  return (
    <Container>
      <BlogImg src="images/BlogTemp.png" />
      <Title>Blog Title</Title>
      <Date>Feb 23, 2023</Date>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor
        sit amet
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 370px;
  height: 399px;
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

export default BlogComp;
