import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { BiCopyright } from "react-icons/bi";
import {
  FooterBar,
  FooterContainer,
  FooterRow,
  FooterColumn,
  FooterHeading,
  FooterMenu,
  FooterItemR,
  FooterItemSocial,
  WebsiteLogo,
  CopyrightH,
} from "./FooterElements";
import logo from "./images/AyabLogo.png";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
export const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterBar>
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <FooterHeading>Menu</FooterHeading>
              <FooterMenu>
                <FooterItemR onClick={toggleHome} to="activities">
                  Activities
                </FooterItemR>
                <FooterItemR onClick={toggleHome} to="get-help">
                  Get Help
                </FooterItemR>
                <FooterItemR onClick={toggleHome} to="offer-help">
                  Offer Help
                </FooterItemR>
                <FooterItemR onClick={toggleHome} to="blog">
                  Blog
                </FooterItemR>
                <FooterItemR onClick={toggleHome} to="contact-us">
                  Contact Us
                </FooterItemR>
              </FooterMenu>
            </FooterColumn>

            <FooterColumn>
              <WebsiteLogo to="/" onClick={toggleHome}>
                <Img src={logo} alt="logo_ggc" />
              </WebsiteLogo>
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Social Links</FooterHeading>
              <FooterMenu>
                <FooterItemSocial
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <FiFacebook />
                </FooterItemSocial>
                <FooterItemSocial
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <FiInstagram />
                </FooterItemSocial>
                <FooterItemSocial
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <FiLinkedin />
                </FooterItemSocial>
                <FooterItemSocial
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <FiYoutube />
                </FooterItemSocial>
                <FooterItemSocial
                  href="https://www.pinterest.com/"
                  target="_blank"
                >
                  <ImPinterest2 />
                </FooterItemSocial>
              </FooterMenu>
            </FooterColumn>
          </FooterRow>
          <CopyrightH>
            AYAB TRUST <BiCopyright /> 2021 All right reserved
          </CopyrightH>
        </FooterContainer>
      </FooterBar>
    </>
  );
};

export default Footer;

const Img = styled.img`
  height: 150px;
  @media screen and (max-width: 610px) {
    height: 60px;
  }
`;
