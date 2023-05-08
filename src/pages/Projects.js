import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import CarouselComp from "../components/CarouselComp";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Project style={{ backgroundColor: "#FFB449" }}>
        <Intro>
          <Heading>Drishtikon</Heading>
          <Desc>
            Drishtikon is our introductory product, a monthly based self-help
            cum info-entertainment magazine for the youth of this country. This
            magazine consists of a creative format, that'll help a student get
            access to topics like different career opportunities, authentic
            Indian history, morals-ethics etc.
          </Desc>
          <Button>Learn More</Button>
        </Intro>
        <IntroImg>
          <Image src="images/drishtikon.png" />
        </IntroImg>
      </Project>
      <Project style={{ backgroundColor: "#54AFBC" }}>
        <IntroImg>
          <Image src="images/kaizen.png" />
        </IntroImg>
        <Intro>
          <Heading>KAI-Zen</Heading>
          <Desc>
            Kaizen' is a Japanese philosophy that means change for better or
            continuous betterment, it says that improvement in productivity is a
            gradual and evolving process.
          </Desc>
          <Button>Learn More</Button>
          <Upcoming>Coming Soon!!</Upcoming>
        </Intro>
      </Project>
      <Project style={{ backgroundColor: "#FE5C36" }}>
        <Intro>
          <Heading>L.S.D</Heading>
          <Desc>
            L.S.D, a.k.a, ‘Learn Skills to Develop’ is an up-skilling program
            that will emphasis on lifestyle and developmental changes. We are
            happy to nurture students in different skills by organizing
            workshops that propel the student culture in inspiring ways.
          </Desc>
          <Button>Learn More</Button>
          <Upcoming>Coming Soon!!</Upcoming>
        </Intro>
        <IntroImg>
          <Image src="images/lsd.png" />
        </IntroImg>
      </Project>
      <Drishtikon>
        <Title>Drishtikon</Title>
        <FlexBox>
          <About>
            <SubHeading>Made for Students, By Students</SubHeading>
            <Para>
              Drishtikon is our introductory product, a monthly based self-help
              cum info-entertainment magazine for the youth of this country.
              This magazine consists of a creative format, that'll help a
              student get access to topics like different career opportunities,
              authentic Indian history, morals-ethics etc.
            </Para>
          </About>
          <Carousel>
            <CarouselComp />
          </Carousel>
        </FlexBox>
      </Drishtikon>
      <Magazine></Magazine>
      <Footer />
    </>
  );
};

const Project = styled.div`
  display: flex;
  padding: 0 0 0 6rem;
  min-height: 500px;
  @media (max-width: 850px) {
    flex-direction: column;
    padding: 1rem 3rem;
  }
`;
const Intro = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  @media (max-width: 850px) {
    align-items: center;
    margin-top: 1rem;
  }
`;
const IntroImg = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  flex: 50%;

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 77%;
  margin: auto;
  height: 77%;
  @media (max-width: 850px) {
    margin: 1rem auto;
  }
`;
const Heading = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  margin: 0;
`;
const Desc = styled.p`
  width: 87%;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: 850px) {
    width: 100%;
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
  padding: 8px 14px;
  /* margin: 1rem 0 2rem; */
  color: #1c1b1b;
`;

const Upcoming = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #fff;
  margin: 0.7rem 0;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  margin: 0;
  margin-bottom: 1rem;
  color: #ffb449;
`;

const Drishtikon = styled.section`
  margin: 2rem auto;
  width: 90%;
`;

const FlexBox = styled.div`
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const About = styled.div`
  flex: 50%;
  background: #ffc066;
  border-width: 1px 0px 1px 1px;
  border-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding-left: 3rem;
  border-style: solid;
`;
const Carousel = styled.div`
  flex: 50%;
  background: #fffdd0;
  padding: 2rem;
  border: 2px solid #000000;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 0;
  line-height: 36px;
  color: #000;
`;
const Para = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  width: 90%;
  margin-bottom: 2rem;
  color: #1c1b1b;
`;

const Magazine = styled.div`
  width: 965px;
  height: 904px;
  margin: 5rem auto;
  background: #bdbdbd;
  border: 1px solid #000000;

  @media screen and (max-width: 1050px) {
    width: 70%;
  }
`;

export default Projects;
