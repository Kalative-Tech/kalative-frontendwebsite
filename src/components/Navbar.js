import { NavLink } from "react-router-dom";
//import { Link, animateScroll as scroll } from 'react-scroll';
import styled from "styled-components";
import MenuIcon from "../icons/menu.svg";
import { useEffect, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <NavbarContainer>
      <NavImg>
        <img alt="Logo" src="/images/kalative_logo.png" />
      </NavImg>
      <NavMenu onClick={() => setSidebarOpen(!sidebarOpen)}>
        <img alt="Logo" src={MenuIcon} />
      </NavMenu>
      <NavItems
        className={"animate__animated animate__fadeIn"}
        style={{
          display:
            width <= 1024 ? (sidebarOpen === true ? "flex" : "none") : "flex",
        }}
      >
        <NavItem
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavItem>
        {/* <NavItem
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/WhyUs"
        >
         Why us?
        </NavItem> */}
        <NavItem
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/projects"}
        >
          Projects
        </NavItem>
        <NavItem
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/blogs"}
        >
          Blogs
        </NavItem>
        <NavItem
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/newsletters"
        >
          NewsLetters
        </NavItem>
        {/* <NavItem
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/teams"
        >
          Team
        </NavItem> */}
        {/* for registrartion */}
        {/* <NavButton>Register</NavButton> */}
        {width <= 1024 ? (
          <>
            <NavItem
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/profile"}
            >
              Profile
            </NavItem>
            <NavItem
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/contact"}
            >
              Contact Us
            </NavItem>
            {/* //Logout or Login */}
            <NavButton>Logout</NavButton>
          </>
        ) : (
          <ProfileDropdown />
        )}
      </NavItems>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 78px;
  display: flex;
  justify-content: space-around;
  gap: 10rem;
  align-items: flex-start;
  z-index: 100;
  padding: 10px 0px;
  position: relative;

  @media screen and (min-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;
const NavImg = styled.div`
  height: 88px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const NavMenu = styled.div`
  align-self: center;
  cursor: pointer;
  transition: all 1s ease-in;
  -webkit-transition: all 1s ease-in;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const NavItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: 80vh;
  min-width: 300px;
  overflow-y: scroll;
  box-shadow: -4px 0px 7px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  gap: 3rem;
  position: fixed;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  right: 0;
  top: 6.3rem;
  transition: display 10s ease-in;
  -webkit-transition: display 10s ease-in;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: auto;
    width: auto;
    position: static;
    /* top: 0; */
    cursor: pointer;
    box-shadow: none;
  }
`;
const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  color: #000;
  text-decoration: none;

  &.active {
    border-block-end-color: #54afbc;
    border-block-end-style: solid;
    border-block-width: 5px;
    border-radius: 4px;
  }
`;

const NavButton = styled.button`
  width: 124px;
  height: 42px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  background: #54afbc;
  border: 3px solid #1c1b1b;
  border-radius: 12px;
  padding: 8px 14px;
`;
