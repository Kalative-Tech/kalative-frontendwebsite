import styled from "styled-components";
import InstagramIcon from "../icons/instagram.svg";
import DiscordIcon from "../icons/discord.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter>
        <FooterLeft>
          <AboutKala>
            <img alt="Logo" src="/images/kalative_logo.png" />
            <p>
              We believe in achieving our customers' dreams and showing them
              that their dreams have become a reality. If you have one such,
              then we are the right place for you.
            </p>
          </AboutKala>
          <SocialMedia>
            <img src={InstagramIcon} alt="instaicon" />
            <img src={DiscordIcon} alt="discordicon" />
          </SocialMedia>
        </FooterLeft>
        <FooterRight>
          <Column>
            <Heading>Company</Heading>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Partners</FooterLink>
            <FooterLink>Products</FooterLink>
            <FooterLink>Resources</FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink>Help</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms</FooterLink>
            <FooterLink>FAQ's</FooterLink>
          </Column>
        </FooterRight>
      </MainFooter>
      <SubFooter>
        <p> © 2022 Kalative. All Right Reserved</p>
      </SubFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  margin-top: auto;
  width: 100%;
  background-color: #f0f0f0;
`;
const MainFooter = styled.div`
  display: grid;
  min-height: 200px;
  padding: 30px 10px;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex: 60%;
  flex-direction: column;
  @media (min-width: 1000px) {
    margin-left: 50px;
  }
`;
const FooterRight = styled.div`
  display: flex;
  flex: 40%;
  gap: 40%;
  justify-content: center;
`;
const AboutKala = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    height: 3.5rem;
  }

  p {
    color: #636363;
    width: 65%;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;

  img {
    height: 1.6rem;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.p`
  font-weight: 600;
  font-size: 18px;

  /* line-height: 25px; */
  color: #636363;
`;

const FooterLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: #636363;
  margin: 0.3rem 0;

  &:hover {
    color: #000;
    transition: all 1s ease;
  }
`;

const SubFooter = styled.div`
  background: #d9d8d7;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #939393;
  }
`;

export default Footer;
