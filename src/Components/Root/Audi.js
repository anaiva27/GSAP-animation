import React, { useContext, useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import bgImg from "Components/Assets/BG.png";
import headerLogo from "Components/Assets/headerLogo.png";
import Img from "Components/Assets/Group6646.png";
import Blob from "Components/Assets/Blob1.png";
import Blurb1 from "Components/Assets/Blurb11.png";
import Blurb2 from "Components/Assets/Blurb2.png";
import Elipse1 from "Components/Assets/Ellipse.png";
import Elipse2 from "Components/Assets/Elipse2.png";
import Phone1 from "Components/Assets/phone4.png";
import Phone2 from "Components/Assets/PhoneF.png";
import Img1 from "Components/Assets/phone1.png";
import Img2 from "Components/Assets/phone2.png";
import Img3 from "Components/Assets/phone3.png";
import Artist1 from "Components/Assets/Frame1.png";
import Artist2 from "Components/Assets/Frame2.png";
import Artist3 from "Components/Assets/Frame3.png";
import Artist4 from "Components/Assets/Frame4.png";
import Artist5 from "Components/Assets/Frame5.png";
import tab1 from "Components/Assets/tab1.png";
import tab2 from "Components/Assets/tab2.png";
import tab3 from "Components/Assets/tab3.png";
import tab4 from "Components/Assets/tab4.png";
import tab5 from "Components/Assets/tab5.png";
import Logo1 from "Components/Assets/01.png";
import Logo2 from "Components/Assets/02.png";
import Logo3 from "Components/Assets/03.png";
import Logo4 from "Components/Assets/04.png";
import Logo5 from "Components/Assets/05.png";
import Logo6 from "Components/Assets/06.png";
import car1 from "Components/Assets/car1.png";
import car2 from "Components/Assets/car2.png";
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

export const Audi = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const isMobile = useMediaQuery();
  const [updatedLottie, setUpdatedLottie] = useState({
    loop: false,
    autoplay: false,
    animationData: animationData,
  });

  const container = useRef(null);
  const containerCTA = useRef(null);
  const smoother = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {},
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: circleDataColor,
    rendererSettings: {},
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: testData,
    rendererSettings: {},
  };

  useGSAP(
    () => {
      gsap.to(".cover1", {
        opacity: 0,
        duration: 0.5,
        //   y: "-500",
        delay: 0,
        ease: "linear",
        scrollTrigger: {
          scrub: false,
          trigger: ".cover2",
          start: "top center",
          //  end: "+=300",
          markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to(".cover1", {
        position: "absolute",
        scrollTrigger: {
          trigger: ".cover2",
          start: "top",
          //  end: "+=300",
          markers: true,
        },
      });
      // gsap.to(".cover2", {
      //   position: "sticky",
      //   opacity: 1,
      //   duration: 0.5,
      // });
      // let tl = gsap.timeline({
      //   defaults: { ease: "power4.inOut" },
      // });
      // let tlImage1 = gsap.timeline({
      //   defaults: { ease: "power4.inOut" },
      // });
      // let tlImage3 = gsap.timeline({
      //   defaults: { ease: "power4.inOut" },
      // });
      // tl.to(
      //   ".header",
      //   { delay: 2, stagger: 0.1, duration: 1, opacity: 1, y: 0 },
      //   "-=2",
      // ).to(
      //   ".hero",
      //   { delay: 1, stagger: 0.2, duration: 1.2, opacity: 1, y: 0 },
      //   "-=2",
      // );
      // gsap.to(".phone2", {
      //   delay: 1.5,
      //   opacity: 1,
      //   scale: 1.3,
      // });
      // tlImage1.to(".phone1", {
      //   delay: 1.5,
      //   opacity: 1,
      //   duration: 1,
      //   x: 20,
      // });

      // tlImage3.to(".phone3", {
      //   delay: 1.5,
      //   opacity: 1,
      //   duration: 1,
      //   x: -20,
      // });

      // gsap.to(".logo1", {
      //   opacity: 1,
      //   stagger: 0.08,
      //   y: 0,
      //   duration: 0.5,
      //   delay: 0,
      //   ease: "power4.inOut",
      //   scrollTrigger: {
      //     trigger: ".img2",
      //     start: "top center",
      //     //   end: "+=300",
      //     // markers: true,
      //   },
      // });
      // gsap.to(".bodyCTA", {
      //   opacity: 1,
      //   y: 0,
      //   duration: 1,
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: ".img2",
      //     start: "top center",
      //     //   end: "+=300",
      //     // markers: true,
      //   },
      // });
      // gsap.to(".artist", {
      //   opacity: 1,
      //   y: 0,
      //   x: 0,
      //   stagger: 0.1,
      //   duration: 0.5,
      //   delay: 1.5,
      //   scrollTrigger: {
      //     trigger: ".img2",
      //     start: "top center",
      //     //   end: "+=300",
      //     // markers: true,
      //   },
      // });

      // gsap.to(".thirdCTA", {
      //   opacity: 1,
      //   y: 0,
      //   stagger: 0.2,
      //   duration: 0.5,
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: ".thirdTrigger",
      //     start: "top center",
      //     //   end: "+=300",
      //     // markers: true,
      //   },
      // });
      // gsap.to(".phoneS", {
      //   opacity: 1,
      //   scale: 1,
      //   duration: 1,
      //   delay: 1.5,
      //   scrollTrigger: {
      //     trigger: ".thirdTrigger",
      //     start: "top center",
      //     //   end: "+=300",
      //     // markers: true,
      //   },
      // });
      // gsap.to(".elipse", {
      //   opacity: 1,
      //   duration: 2,
      //   delay: 1.5,
      //   scrollTrigger: {
      //     trigger: ".thirdTrigger",
      //     start: "top center",
      //   },
      // });
      // gsap.to(".phoneClip1", {
      //   opacity: 1,
      //   y: 0,
      //   duration: 1.5,
      //   delay: 2.5,
      //   onStart: () => {
      //     setUpdatedLottie((prev) => {
      //       console.log("prev", prev);
      //       if (prev.autoplay) return prev;
      //       return (prev.autoplay = true);
      //     });
      //   },
      //   scrollTrigger: {
      //     trigger: ".thirdTrigger",
      //     start: "top center",
      //   },
      // });
      // gsap.to(".phoneClip2", {
      //   opacity: 1,
      //   y: 0,
      //   duration: 1.5,
      //   delay: 2,
      //   scrollTrigger: {
      //     trigger: ".thirdTrigger",
      //     start: "top center",
      //   },
      // });
      // tlList
      //   .to(".tab", {
      //     opacity: 1,
      //     y: 0,
      //     duration: 1.5,
      //     stagger: 0.5,
      //     delay: 1,
      //   })
      //   .to(".opacity", {
      //     opacity: 0.6,
      //     duration: 0.1,
      //     delay: 0,
      //   });
    },
    { scope: container },
  );

  // useGSAP(
  //   () => {
  //     let tlCTA = gsap.timeline({
  //       defaults: {
  //         ease: "power4.inOut",
  //         scrollTrigger: {
  //           trigger: ".img2",
  //           start: "top center",
  //           //   end: "+=300",
  //           // markers: true,
  //         },
  //       },
  //     });
  //     tlCTA
  //       .to(".logo1", {
  //         opacity: 1,
  //         stagger: 0.3,
  //         y: 0,
  //         duration: 1,
  //         delay: 1,
  //       })
  //       .to(".bodyCTA", {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         delay: 2,
  //       });
  //   },
  //   {
  //     scope: containerCTA,
  //   },
  // );

  return (
    <Wrapper ref={container} className="scroll">
      <CoverOne className="cover1">
        <img src={car1} alt="" />
      </CoverOne>
      <CoverTwo className="cover2">
        <img src={car2} alt="" />
      </CoverTwo>

      <Content as="section" id="registration-content" src={bgImg}></Content>

      <ContentSolution as="section">
        <ThirdContentContainer>
          <SolutionFormContent className="thirdTrigger">
            <HighLight className="thirdCTA">
              <Logo src={headerLogo} className="line" /> Live for Live Shows
            </HighLight>
            <Heading className="thirdCTA">
              Connect With Fans At Your Shows.
            </Heading>
            <Body className="thirdCTA">
              SET.Live lets touring artists easily create unique digital
              experiences at each concert to effortlessly capturing fan info and
              enhance the show experience.
            </Body>
            <ul>
              <li className="thirdCTA">
                {" "}
                Geo-targeted experiences for your live show
              </li>
              <li className="thirdCTA">
                No app to download for your or your fans
              </li>
              <li className="thirdCTA">Easy to execute on-the-road</li>
            </ul>

            <ButtonSecondary className="thirdCTA">Learn More</ButtonSecondary>
          </SolutionFormContent>
          <ThirdCTAImage isMobile={isMobile} as="section" id="artist-image" S>
            <Elipse src={Elipse1} alt="" className="elipse" />
            <Phone3 src={Phone1} alt="" className="phoneS" />
            <CounterWrap src={Blurb1} className="phoneClip1">
              <div>
                {/* <PhoneClip1 src={Blurb1} alt="" className="phoneClip1" /> */}
                {updatedLottie && (
                  <Lottie
                    options={updatedLottie ? updatedLottie : defaultOptions}
                    height={100}
                    width={100}
                    eventListeners={[
                      {
                        eventName: "complete",
                        callback: () => {},
                      },
                    ]}
                  />
                )}
              </div>
            </CounterWrap>
            <PhoneClip2 src={Blurb2} alt="" className="phoneClip2" />
          </ThirdCTAImage>
        </ThirdContentContainer>
        <BlobBg src={Blob} alt="" />
      </ContentSolution>

      <FanSolution as="section" className="forthTrigger">
        <ThirdContentContainer>
          <ThirdCTAImage isMobile={isMobile} as="section" id="artist-image" S>
            <Elipse src={Elipse2} alt="" className="elipse2" />
            <Phone3 src={Phone2} alt="" className="phoneF" />
            <ListWrap className="clipList1">
              <img src={tab1} alt="" className="tab" />
              <img src={tab2} alt="" className="tab" />
              <img src={tab3} alt="" className="tab" />
              <img src={tab4} alt="" className="tab" />
              <img src={tab5} alt="" className="tab opacity" />
            </ListWrap>
          </ThirdCTAImage>
          <SolutionFormContent className="thirdTrigger">
            <HighLight className="thirdCTA">
              <Logo src={headerLogo} className="line" /> Live for Live Shows
            </HighLight>
            <Heading className="thirdCTA">
              Connect With Fans At Your Shows.
            </Heading>
            <Body className="thirdCTA">
              SET.Live lets touring artists easily create unique digital
              experiences at each concert to effortlessly capturing fan info and
              enhance the show experience.
            </Body>
            <ul>
              <li className="thirdCTA">
                {" "}
                Geo-targeted experiences for your live show
              </li>
              <li className="thirdCTA">
                No app to download for your or your fans
              </li>
              <li className="thirdCTA">Easy to execute on-the-road</li>
            </ul>

            <ButtonSecondary className="thirdCTA">Learn More</ButtonSecondary>
          </SolutionFormContent>
        </ThirdContentContainer>
        <BlobBg src={Blob} alt="" />
      </FanSolution>
    </Wrapper>
  );
};

const CoverOne = styled.div`
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  opacity: 1;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
const CoverTwo = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 1;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

// ======== CONTENT / LEFT SIDE ======== //
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
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #07092b;
  /* padding: 0 20px 20px; */
  gap: 35px;
  position: relative;
`;
const LottieWrap = styled.div`
  width: 100%;
  display: flex;
  /* path {
    fill: #5701b7;
    stroke: #5701b7;
  } */
  /* path {
    fill: linear-gradient(45deg, #e71f3d, #67000f);
    stroke: linear-gradient(45deg, #e71f3d, #67000f);
  } */
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ src }) => src});
  border-radius: 15px;
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
  // margin: -40px auto 0;
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
  margin: 240px auto 0;
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

const Logo = styled.img`
  width: 100%;
  max-width: 50px;
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
