import React, { useContext, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import bgImg from "Components/Assets/BG.png";
import logo from "Components/Assets/Logo.png";
import logoPattern from "Components/Assets/LogoPattern.png";
import artist1 from "Components/Assets/artist1.png";
import artist2 from "Components/Assets/artist2.png";
import artist3 from "Components/Assets/artist3.png";
import artist4 from "Components/Assets/artist4.png";
import artist5 from "Components/Assets/artist5.png";
import artist6 from "Components/Assets/artist6.png";
import details from "Components/Assets/detailsImg.png";
import City from "Components/Assets/City.png";
import Calendar from "Components/Assets/Calendar.png";

import logoMax from "Components/Assets/logoMax.png";
import logoBrand from "Components/Assets/logoAudi.jpeg";
import { useMediaQuery } from "../../Hooks";
import "./styles.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AME = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const isMobile = useMediaQuery();
  const [windowInnerWidth, setInnerWidth] = useState(window.innerWidth);
  const container = useRef(null);
  const containerCTA = useRef(null);
  const smoother = useRef();

  useEffect(() => {
    const _setInnerWidth = () => setInnerWidth(window.innerWidth);
    _setInnerWidth();
    window.addEventListener("resize", _setInnerWidth);
    return () => {
      window.removeEventListener("resize", _setInnerWidth);
    };
  }, []);

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from("#slider", { delay: 1, duration: 1, xPercent: -100 })
        .to("#logo", { opacity: 1, left: 0, right: 0 })
        .to("#slider", { duration: 1, xPercent: 100 })
        .to("#logo", {
          opacity: 1,
          right: "-100px",
        })
        .to("#content", { opacity: 1 })
        .to(".tab", { stagger: 0.2, opacity: 1, y: 10 })
        .to("#logoPattern", {
          opacity: 1,
        });
    },
    { scope: container },
  );

  return (
    <Wrapper ref={container} className="scroll">
      <Slider id="slider"></Slider>
      <Logo src={logo} alt="" id="logo" />
      <LogoPattern src={logoPattern} alt="" id="logoPattern" />
      <Content as="section" id="content">
        <BrandContent>
          <MaxLogo src={logoMax} alt="" id="logo" />
          <BrandDetails>
            <BrandInfo>
              <H1>McDonald’s Lunar New Year Campaign</H1>
              <LogoBox
                hasSummary={true}
                //isOval={shape === "oval"}
              >
                <BrandLogo
                  src={logoBrand}
                  //  isContain={alignment === "scale"}
                />
              </LogoBox>
              <InfoContainer hasSummary={true}>
                <div>
                  <Icon src={City} />
                  <Subtitle>McDonald's</Subtitle>
                </div>
                <TimeContainer>
                  <Icon src={Calendar} />
                  <Subtitle>Sep 04, 2024</Subtitle>
                </TimeContainer>
              </InfoContainer>
              <h4>Summary</h4>
              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
                est neque. In scelerisque lorem nec commodo accumsan. Sed semper
                mauris fermentum massa facilisis, aliquam vehicula mauris
                lobortis. Nulla porttitor accumsan dolor, quis vestibulum risus
                iaculis vel. Aenean id placerat nisl
              </Body>
              {/* {!isMobile && <ListSummary summary={list?.introduction} />} */}
            </BrandInfo>
          </BrandDetails>
          <Highlight alignLeft={windowInnerWidth > 1500}>
            <Subtitle>Sample Artist</Subtitle>
          </Highlight>
          <Caption>
            NOTE: This Sample Artist List is provided for example purposes to
            demonstrate the data available in the MAX Platform™ and the relative
            size/type of artist we recommend... more
          </Caption>
        </BrandContent>
        <ArtistListContent>
          <div>
            <div>
              <img src={artist1} alt="" id="artist" className="tab" />
            </div>
            <div>
              <img src={artist2} alt="" id="artist" className="tab" />
            </div>
          </div>
          <div>
            <div>
              <img src={artist3} alt="" id="artist" className="tab" />
            </div>
            <div>
              <img src={artist4} alt="" id="artist" className="tab" />
            </div>
          </div>
          <div>
            <div>
              <img src={artist5} alt="" id="artist" className="tab" />
            </div>
            <div>
              <img src={artist6} alt="" id="artist" className="tab" />
            </div>
          </div>
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
  background-color: #fff;
  overflow: hidden;
`;
const Logo = styled.img`
  object-fit: cover;
  opacity: 0;
  max-width: 200px;
  position: absolute;
  top: 35%;
  right: -10%;
  scale: 3;
  margin: auto 0 auto auto;
  z-index: 1;
`;
const LogoPattern = styled.img`
  object-fit: cover;
  opacity: 0;
  max-width: 300px;
  position: absolute;
  position: absolute;
  top: 40%;
  left: 150px;
  scale: 2;
  margin: auto auto auto 0;
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
  display: flex;
  /* width: 100%; */
  margin: 0 auto;
  justify-content: center;
  opacity: 0;
  z-index: 2;
  position: relative;
  /* margin-right: 100px; */
  @media (max-width: 950px) {
    flex-direction: column;
    margin: auto;
  }
`;
const BrandContent = styled.div`
  display: flex;
  width: 30%;
  max-width: 500px;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
  padding: 50px;
`;
const ArtistListContent = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  gap: 15px;
  padding: 140px 10vw 50px 0;
  /* margin-right: auto; */
  /* padding-right: 10vw; */
  /* max-width: 1200px; */
  /* flex: 2; */
  z-index: 2;
  max-height: 100vh;
  overflow-y: auto;
  img {
    width: 100%;
    //  max-width: 350px;
  }
  & > div {
    /* max-width: 1000px; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    div {
      max-width: 500px;
    }
  }
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  & ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    opacity: 0;
    /* position: absolute;
    right: 0; */
  }
`;
const BrandDetails = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  opacity: 1;
  z-index: 2;
  & > img {
    width: 50%;
    max-width: 300px;
  }
`;
const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  h4 {
    color: #000;
  }
  h1 {
    margin-bottom: 10px;
  }
  h2 {
    @media (max-width: 950px) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  span {
    margin-top: 20px;
    font-size: 15px;
    color: #000;
  }
`;
const Icon = styled.img`
  border-radius: 25px;
  width: 35px;
  border: 1px solid #000;
  padding: 3px;
  margin-right: 12px;
  @media (max-width: 950px) {
    width: 30px;
    padding: 1px;
  }
`;
const TimeContainer = styled.div`
  position: relative;
  &:hover {
    span {
      visibility: visible;
    }
  }
  @media (max-width: 950px) {
    margin-top: 8px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0 10px 0;

  ${(props) =>
    props.hasSummary &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    `}

  @media (max-width: 950px) {
    margin-top: 8px;
    gap: 0px;
    flex-direction: column;
    align-items: flex-start;
    p {
      font-size: 13px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    margin-right: 40px;
    justify-content: center;
    align-items: center;
  }
`;
const H1 = styled.h1`
  color: black;
  font-size: 30px;
`;
const Subtitle = styled.h2`
  color: black;
  font-weight: 500;
  font-size: 20px;
`;
const Highlight = styled.div`
  background-color: black;
  width: calc(100% + 50px);
  padding: 10px 10px 10px 50px;
  transform: translateX(-50px);
  h2 {
    color: #fff;
    border-left: 4px solid #fa017d;
    padding-left: 10px;
  }
  ${({ alignLeft }) =>
    alignLeft &&
    css`
      width: 100%;
      padding: 10px 10px 10px 15px;
      transform: translateX(0px);
    `}
`;
const Caption = styled.p`
  font-size: 12px;
  color: #999999;
`;
const Body = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  color: #000;
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
const LogoBox = styled.div`
  display: flex;
  background-color: #fff;
  aspect-ratio: 1/1;
  min-width: 200px;
  max-width: 250px;
  box-shadow: 0 0 20px 3px #e9e9e9;
  /* border: 1px solid #e6ebea; */
  margin-right: 50px;
  overflow: hidden;

  ${(props) =>
    props.hasSummary &&
    css`
      min-width: 150px;
      max-width: 150px;
    `}

  ${(props) =>
    props.isOval &&
    css`
      border-radius: 50%;
    `}
  @media (max-width: 950px) {
    min-width: unset;
    min-height: unset;
    width: 132px;
    margin-right: 16px;
  }
`;
const BrandLogo = styled.img`
  width: 100%;
  display: flex;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
  ${(props) =>
    props.isContain &&
    css`
      object-fit: contain;
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
// const HighLight = styled.h3`
//   font-size: min(2vw, 20px);
//   font-weight: 500;
//   color: #e71e3d;
//   span {
//     white-space: nowrap;
//   }
//   img {
//     position: relative;
//     top: 5px;
//   }
// `;

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
