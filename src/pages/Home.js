import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import BlogComp from "../components/BlogComp";
import NewsLetterComp from "../components/NewsLetterComp";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;
  const navigate = useNavigate();
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const reviews = [
    {
      desc: "'As a teacher, it’s so fulfilling to see such bold products to be introduced in education. The language is easy to follow, and reminds me of my schools days for keeping myself entertained.'",
      name: "- Sheela Rani Simon, teacher",
    },
    {
      desc: "'Content provided in the Book Dristhikon is a game changer for Teenagers, I see great change & curiosity in my child after going through Dristhikon by Kalative'",
      name: "- Vijay, Parent of Laasya, Student of class 8",
    },
    {
      desc: "'Well crafted, good wholesome read for a 14-15 year old.'",
      name: "- Bhawna Sharma, parent",
    },
    {
      desc: "'Unique magazine. Uncovers taboo topics. Relatable characters. Moral stories. Appeals to all ages. Captivating graphics. Highly recommended. Share the joy!'",
      name: "- Aditya, 11th std student, Delhi",
    },
    {
      desc:"'Seamless flow. Improved readability. Emotionally balanced. Concepts work well. Authenticity shines. Well done! Success awaits.'",
      name:"- Psychologist"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero>
        <Flex>
          <Left>
            <Text>We are here to change the philosophy of Student Culture</Text>
            <Para>We Cut  <img src="/images/blue.svg"/> Create <img src="/images/yellow.svg"/> Curate</Para>
            <Button>Learn More</Button>
          </Left>
          <Right style={{}}>
            <img src="images/HeroImg.png" />
          </Right>
        </Flex>
        <Flex>
          <Right>
            <img src="images/HeroImg1.png" />
          </Right>
          <Left
            style={{
              backgroundColor: "#54AFBC",
              alignItems: "center",
              paddingLeft: 0,
            }}
          >
            <Text>
              “KALATIVE is a content creating organization for the youth of the
              country.”
            </Text>
          </Left>
        </Flex>
      </Hero>
      <section id="WhyUs">
      <WhyUs>
        <Heading style={{ color: "#FFB449" }}>Why Us?</Heading>
        <FlexBox>
          <Box style={{ background: "#ff866a" }}>
            <Subheading>Development of Real Values</Subheading>
            <Subtext>
              We are living in a global village with abundance of information
              but lack of appealing ways to access it. This compels us to
              consume unnecessary content, ignoring the things that is
              necessary.
            </Subtext>
          </Box>
          <BoxImg src="images/Moral.png" alt=""/>
        </FlexBox>
        <FlexBox>
          <BoxImg src="images/Curious.png" alt="" />
          <Box style={{ background: "#FFC066" }}>
            <Subheading>To Build Curiosity</Subheading>
            <Subtext>
              There is an emphasis put on education and career building but not
              enough on the development of real values. There is a disconnect
              between different generations and we are unable to mend the gaps.
            </Subtext>
          </Box>
        </FlexBox>
        <FlexBox>
          <Box style={{ background: "#8DCCD6" }}>
            <Subheading>Creativity for Students</Subheading>
            <Subtext>
              There is an absence of synergy amongst students for nurturing or
              exploring the creative world. Young minds are the most creative
              curious individuals but an career centric education system limits
              them to hone their talents.
            </Subtext>
          </Box>
          <BoxImg src="images/Imagination.png" alt=""/>
        </FlexBox>
      </WhyUs> 
      </section>
      <KeyObj>
        <Heading style={{ color: "#FE5C36" }}>Key Objectives</Heading>
        <Objectives>
          <Objective>
            <span>🟠</span>
            <Keytext>
              To re-introduce the ancient Indian ethics and values in the
              education system and help in establishing a students community.
            </Keytext>
          </Objective>
          <Objective>
            <span>🔵</span>
            <Keytext>
              Working on, in eradicating major teenage problems like -
              depression, mental health issues, addiction and social behaviour.
            </Keytext>
          </Objective>
          <Objective>
            <span>🔴</span>
            <Keytext>
              To give some fun time to students, and also spread awareness om
              some of the necessary topics
            </Keytext>
          </Objective>
        </Objectives>
      </KeyObj>
      <Team>
        <Heading style={{ color: "#54AFBC" }}>Our Team</Heading>
        <Members>
          <TeamMember src="images/founder1.png" alt=" "></TeamMember>
          <TeamMember src="images/founder2.png" alt=" "></TeamMember>
        </Members>
      </Team>
      <Testimonials>
        <Heading style={{ color: "#FFB449", marginLeft: "3rem" }}>
          Testimonials
        </Heading>
        <Container>
          <Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {reviews.map((review, index) => (
              <Slide key={index}>
                <Desc>{review.desc}</Desc>
                <Name>{review.name}</Name>
              </Slide>
            ))}
          </Slider>
          <Dots>
            {reviews.map((_, idx) => (
              <Dot
                style={{
                  backgroundColor: index === idx ? "#fff" : "#c4c4c4",
                  width: index === idx ? "15px" : "8px",
                  height: index === idx ? "15px" : "8px",
                }}
                key={idx}
                onClick={() => {
                  setIndex(idx);
                }}
              ></Dot>
            ))}
          </Dots>
        </Container>
      </Testimonials>
      <Blogs>
        <Header>
          <Heading style={{ color: "#FE5C36" }}>Blogs</Heading>
          <Button onClick={() => navigate("/blogs")}>View All</Button>
        </Header>
        <BlogContainer>
          <BlogComp />
        </BlogContainer>
      </Blogs>
      <NewsLetter>
        <Header>
          <Heading style={{ color: "#54AFBC" }}>NewsLetter</Heading>
          <Button onClick={() => navigate("/newsletters")}>View All</Button>
        </Header>
        <BlogContainer>
          <NewsLetterComp />
        </BlogContainer>
      </NewsLetter>
      <Footer />
    </>
  );
};

const Hero = styled.section``;
const WhyUs = styled.section`
  margin: 2rem auto;
  width: 90%;
`;
const KeyObj = styled.section`
  margin: 2rem auto;
  width: 90%;
`;
const Team = styled.section`
  margin: 2rem auto;
  width: 90%;
`;
const Testimonials = styled.section`
  margin: 2rem auto;
`;

const Blogs = styled.section`
  margin: 2rem auto;
  width: 90%;
`;

const NewsLetter = styled.section`
  margin: 2rem auto;
  width: 90%;
`;

const Flex = styled.div`
  display: flex;
  /* min-height: 530px; */
  min-width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  background: #ffb449;
  /* padding: 3rem 0 0rem 6rem; */
  max-height: 500px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5rem;
  justify-content: center;

  @media (max-width: 850px) {
    max-width: 100%;
    /* padding: ; */
    min-height: 500px;
  }

  @media (max-width: 420px) {
    padding-left: 2rem;
    min-height:340px;
  }
`;
const Right = styled.div`
  max-height: 500px;
  min-width: 50%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 850px) {
    min-width: 100%;
    min-height: 500px;
    /* padding: ; */

    img {
      object-fit: contain;
    }
  }
`;

const Text = styled.h3`
  font-weight: 500;
  font-size: 40px;
  margin: 0;
  width: 75%;
  line-height: 60px;
  color: #000000;

  @media (max-width: 420px) {
    width: 90%;
    font-size:28px;
    line-height:40px;
  }
`;
const Para = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  @media (max-width: 420px){
    font-size:18px;
    line-height:30px;
    
  }
`;
const Button = styled.button`
  background: #ffffff;
  border: 3px solid #1c1b1b;
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
  /* margin: 1rem 0; */
  padding: 8px 14px;
  color: #1c1b1b;
  @media (max-width: 420px){
   margin-left:40px;
   
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  margin: 0;
  margin-bottom: 1rem;
`;
const Box = styled.div`
  border: 2px solid #000000;
  width: 437px;
  height: 280px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4rem;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const BoxImg = styled.img`
  height: 20rem;
`;
const Subheading = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;
const Subtext = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width: 80%;
  margin: 0 auto;
  color: #000;
`;

const Objectives = styled.div`
  background: #fffdd0;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  min-height: 248px;
  border: 2px solid #000000;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Objective = styled.div`
  display: flex;
  align-items: baseline;
`;

const Keytext = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-left: 1rem;
  line-height: 27px;
  width: 80%;
`;

const TeamMember = styled.img`
  border: 1px solid #000000;
  width: 558px;
  height: 328px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const Members = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1260px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Container = styled.div`
  min-height: 380px;
  background: #1c1b1b;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Slider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const Slide = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Dots = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 420px){
    margin-bottom:1rem;
   }
`;
const Dot = styled.div`
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  margin: 0px 7px 0px;
`;

const Desc = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 46px;
  text-align: center;
  width: 80%;
  white-space: break-spaces;
  margin: 1rem auto;
  color: #fff;
  @media (max-width: 420px){
   font-size:20px;
  }
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin: 1rem 0;
  color: #fff;
  @media (max-width: 420px){
    font-size:18px;
   }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BlogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export default Home;
