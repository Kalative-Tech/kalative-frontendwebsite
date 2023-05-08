import React, { useState } from "react";
import styled from "styled-components";

const CarouselComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const content = [
    {
      id: 1,
      title: "Want to know more about Drishtikon?",
      desc: "",
      color: "#54AFBC",
    },
    {
      id: 2,
      title: "Imagine a Pencil !!",
      desc: "",
      color: "#FE5C36",
    },
    {
      id: 3,
      title: "The LEAD, the CORE",
      desc: "Some concepts in our magazine are like the graphite of a pencil. Concepts like teaching lifestyle habits, emotions management, morals etc are our defining factors.Columns like these are eye opening and intriguing",
      color: "#FFB449",
    },
    {
      id: 4,
      title: "The WOOD, the QUALITY of a Pencil",
      desc: "We cover concepts like different careers, breakdown of different sorts of media (books, movies, animes, etc), authentic historical events. These columns in our magazine is filled with interesting and wholesome content!",
      color: "#54AFBC",
    },
    {
      id: 5,
      title: "The OUTER COVER , the BEAUTY",
      desc: "Our magazine consists of a story arc of two characters, Radhe and Paarth that will be presented in a comic fashion. These will be developing stories, and the content will grow with subsequent issues of our book.",
      color: "#FE5C36",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= content.length) {
      newIndex = content.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <Container>
      <Slider style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {content.map((c, index) => (
          <Slide id={c.id}>
            <Flex>
              <div style={{ marginRight: 0 }}>
                <Heading>{c.title}</Heading>
                {index === 1 && <Image src="images/hor_pencil.png" />}
                <Desc>{c.desc}</Desc>
                <LeftBtn
                  style={{ backgroundColor: c.color }}
                  onClick={() => updateIndex(index - 1)}
                >
                  &larr;
                </LeftBtn>
                <RightBtn
                  style={{ backgroundColor: c.color }}
                  onClick={() => updateIndex(index + 1)}
                >
                  &rarr;
                </RightBtn>
              </div>
              {index !== 0 && index !== 1 && (
                <SideImage src="images/ver_pencil.png" />
              )}
            </Flex>
          </Slide>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 500px;
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

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.p`
  margin: 0.7rem 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000;
  white-space: break-spaces;

  @media screen and (max-width: 550px) {
    /* width: 70%; */
  }
`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000;
  width: 90%;
  white-space: break-spaces;
  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;
const LeftBtn = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  border: 2px solid #000000;
`;
const RightBtn = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  margin-left: 1rem;
  font-size: 24px;
  border: 2px solid #000000;
`;
const SideImage = styled.img`
  margin: 0;
  width: 165px;
  height: 214px;
  margin-left: -100px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const Image = styled.img`
  margin: -72px -25px;
  height: 13rem;
`;

export default CarouselComp;
