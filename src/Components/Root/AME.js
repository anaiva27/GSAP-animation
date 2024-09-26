import React, { useContext, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import bgImg from "Components/Assets/BG.png";
import logo from "Components/Assets/Logo.png";
import artist1 from "Components/Assets/artist1.png";
import artist2 from "Components/Assets/artist2.png";
import artist3 from "Components/Assets/artist3.png";
import artist4 from "Components/Assets/artist4.png";
import artist5 from "Components/Assets/artist5.png";
import details from "Components/Assets/detailsImg.png";
import logoMax from "Components/Assets/logoMax.png";
import logoBrand from "Components/Assets/logoAudi.jpeg";
import Lottie from "react-lottie";
import * as animationData from "./count.json";
import * as circleData from "./circlepulse01.json";
import * as circleDataColor from "./pulse2.json";
import * as testData from "./test3.json";
import { useMediaQuery } from "../../Hooks";
import "./styles.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AME = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const isMobile = useMediaQuery();

  const container = useRef(null);
  const containerCTA = useRef(null);
  const smoother = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from("#slider", { delay: 1, duration: 1, xPercent: -100 })
        .to("#logo", { opacity: 1, left: 0, right: 0 })
        .to("#slider", { dalay: 3, duration: 1, xPercent: 100 })
        .to("#logo", {
          opacity: 1,
          right: "-10%",
          // top: "40%",
          // position: "sticky",
        })
        .to("#content", { opacity: 1 })
        .to(".tab", { stagger: 0.2, opacity: 1, y: 10 });
    },
    { scope: container },
  );

  return (
    <Wrapper ref={container} className="scroll">
      <Slider id="slider"></Slider>
      <Logo src={logo} alt="" id="logo" />
      <Content as="section" id="content">
        <BrandContent>
          <MaxLogo src={logoMax} alt="" id="logo" />
          <BrandDetails>
            <img src={logoBrand} alt="" id="logoBrand" />
            <img src={details} alt="" id="details" />
          </BrandDetails>
        </BrandContent>
        <ArtistListContent>
          <img src={artist1} alt="" id="artist" className="tab" />
          <img src={artist2} alt="" id="artist" className="tab" />
          <img src={artist3} alt="" id="artist" className="tab" />
          <img src={artist4} alt="" id="artist" className="tab" />
          <img src={artist5} alt="" id="artist" className="tab" />
        </ArtistListContent>
      </Content>
    </Wrapper>
  );
};

// ======== CONTENT / LEFT SIDE ======== //
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #f7fafc;
  overflow: hidden;
`;
const Logo = styled.img`
  width: 20%;
  object-fit: contain;
  opacity: 0;
  max-width: 200px;
  position: absolute;
  top: 35%;
  right: -10%;
  scale: 3;
  margin: auto 0 auto auto;
  z-index: 1;
`;
const MaxLogo = styled.img`
  width: 100%;
  max-width: 100px;
  object-fit: contain;
  margin-bottom: 40px;
`;
const Slider = styled.div`
  background-color: #000;
  width: 100%;
  display: grid;
  place-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
const Content = styled.div`
  display: grid;
  width: 85%;
  grid-template-columns: 2fr 3fr;
  opacity: 0;
  z-index: 2;
  /* margin-right: 100px; */
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    margin: auto;
  }
`;
const BrandContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  opacity: 1;
  z-index: 2;
  left: 0;
  top: 0;
  padding: 50px;
`;
const ArtistListContent = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  opacity: 1;
  padding-top: 50px;
  z-index: 2;
  max-height: 100vh;
  overflow-y: scroll;
  img {
    width: 100%;
    //  max-width: 350px;
  }
`;
const BrandDetails = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  opacity: 1;
  z-index: 2;
  img {
    width: 50%;
    max-width: 300px;
  }
`;
const Body = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  color: #fff;
  ${({ registered }) => registered && "margin: 0 0 15px 0;"}
  a,
  a:active,
  a:visited {
    color: #ea1300;
  }
  ${({ isMobile }) =>
    isMobile &&
    `
  font-size: min(4vw, 18px);
  `}
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: -30px;
  color: white;
  font-size: 13px;
  gap: 20px;
  font-weight: 400;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const HeaderCTA = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
  align-items: center;
  @media (max-width: 950px) {
    display: none;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
const Registration = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const ContentCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 0;
`;
const ContentSolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 30px;
  padding: 30px 0;
  overflow: hidden;
`;
const BlobBg = styled.img`
  position: absolute;
  right: 0;
  bottom: -20%;
  z-index: 1;
  width: 50%;
  min-width: 800px;
`;
const FanSolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 30px;
  padding: 30px 0;
  overflow: hidden;
  ${BlobBg} {
    right: 75%;
  }
`;
const SecondFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text-align: center;
  padding: 20px;
`;
const ThirdFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  justify-content: center;
  gap: 30px;
  text-align: center;
  padding: 50px 20px;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
const ArtistImageRow = styled.div`
  display: flex;
  width: 98%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  img {
    object-fit: cover;
    width: 20%;
  }
`;
const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 950px) {
    width: 100%;
    img {
      width: 15%;
    }
  }
`;
const ContentContainer = styled.div`
  margin: -40px auto 0;
  padding: 35px;
  width: 100%;
  max-width: 1350px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  gap: 30px;
  z-index: 50;
  background-color: transparent;
  @media (max-width: 950px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
const ThirdContentContainer = styled.div`
  margin: -40px auto 0;
  padding: 35px;
  width: 100%;
  max-width: 1350px;
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  gap: 30px;
  z-index: 50;
  background-color: transparent;
  @media (max-width: 950px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

const Link = styled.a`
  display: block;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: flex-start;
  background-color: transparent;
  ${Body} {
    width: 60%;
  }
`;
const SolutionFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: flex-start;
  background-color: transparent;
  width: 50%;
  ul {
    color: #fff;
    margin-left: 20px;
    li {
      padding: 5px 0;
      font-size: 14px;
      font-weight: 400;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: clamp(60px, 3vw, 40px);
  line-height: 1.2;
  //  margin-bottom: 24px;
  color: #fff;

  span {
    font-weight: 300;
    @media (max-width: 950px) {
      font-size: 25px;
      display: block;
    }
  }
  @media (max-width: 950px) {
    font-size: min(7vw, 28px);
  }
`;

const SubHeading = styled.h3`
  font-size: min(3vw, 40px);
  font-weight: 600;
  color: #fff;

  span {
    white-space: nowrap;
  }
`;
const HighLight = styled.h3`
  font-size: min(2vw, 20px);
  font-weight: 500;
  color: #e71e3d;
  span {
    white-space: nowrap;
  }
  img {
    position: relative;
    top: 5px;
  }
`;

// ======== ARTIST IMAGE / RIGHT SIDE ======== //

const ArtistImage = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    width: 40%;
    max-width: 450px;
    min-width: 175px;
    /* margin-left: -20%;
    margin-top: 50px; */
  }
  @media (max-width: 950px) {
    margin-top: 50px;
    width: 80%;
  }
`;
const ThirdCTAImage = styled.div`
  position: relative;
  width: 50%;
  z-index: 10;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  ${({ isMobile }) =>
    isMobile &&
    css`
      img {
        margin-top: 0;
      }
    `}
`;
const Elipse = styled.img`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  object-fit: cover;
  margin: auto;
`;
const Phone3 = styled.img`
  z-index: 3;
  object-fit: cover;
  width: 65%;
  margin: auto;
  margin-top: 30px;
`;
const CounterWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 5%;
  top: 25%;
  z-index: 10;
  width: 25%;
  border-radius: 6px;
  background-color: #e71e3daa;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  & > div {
    width: 100%;
    margin-top: 10px;
    margin-bottom: -10px;
  }
`;
const ListWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 5%;
  top: 25%;
  z-index: 10;
  width: 25%;
  img {
    width: 120%;
  }
`;
const PhoneClip1 = styled.img`
  position: absolute;
  left: 5%;
  top: 25%;
  z-index: 10;
  width: 25%;
  border-radius: 6px;
  background-color: #e71e3daa;
`;
const PhoneClip2 = styled.img`
  position: absolute;
  right: 5%;
  top: 50%;
  z-index: 10;
  width: 25%;
  border-radius: 6px;
  background-color: #e71e3daa;
`;
const ButtonSecondary = styled.button`
  background-color: #ffffff;
  color: #0731a1;
  border: none;
  outline: 0;
  height: 45px;
  display: flex;
  font-family: "Poppins";
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
  white-space: nowrap !important;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  width: fit-content;
  padding: 0 25px;

  &:hover {
    background-color: #82dcff;
    color: #0731a1;
  }
  &:focus {
    background-color: #000;
    color: #fff;
    border: 3px solid #8297d0;
  }
`;
