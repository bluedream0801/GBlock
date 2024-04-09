import React , {useEffect, useRef} from "react";
import leftBorder from "../../static/step_left_border.webp";
import rightBorder from "../../static/step_border_bottom.webp";
export default function RoadMapSection() {

    const sectionRefs = useRef([]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Change the threshold as needed
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInFromBottomRoadmap 3s ease forwards';
        } else {
          entry.target.style.animation = 'fadeOutToBottomRoadmap .2s ease forwards';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionRefs.current.forEach(ref => {
      observer.observe(ref);
    });
  });
  return (
    <div>
      <div className="RoadmapSection">
        <div className="titleSection">
          <div className="outlined">Roadmap</div>
          <div className="regular">Roadmap</div>
        </div>
        <div className="container">
          <div className="steps">
            <div className="step step1 right_step" ref={el => sectionRefs.current[0] = el}>
              <div className="stepNumberMobile">
                <span>1</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2022</div>
                <div className="step_title">NFT PUBLIC SALE MINT</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                 
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step2 left_step" ref={el => sectionRefs.current[1] = el}>
              <div className="stepNumberMobile">
                <span>2</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2022</div>
                <div className="step_title">NFT MARKETPLACE</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step3 right_step" ref={el => sectionRefs.current[2] = el}>
              <div className="stepNumberMobile">
                <span>3</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2022</div>
                <div className="step_title">COORDINATE MARKETPLACE</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step4 left_step" ref={el => sectionRefs.current[3] = el}>
              <div className="stepNumberMobile">
                <span>4</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2022</div>
                <div className="step_title">MY COLLECTION EXPANSION</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step5 right_step" ref={el => sectionRefs.current[4] = el}>
              <div className="stepNumberMobile">
                <span>5</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2022</div>
                <div className="step_title">UE5-OMNICHAIN PLUGIN</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step6 left_step" ref={el => sectionRefs.current[5] = el}>
              <div className="stepNumberMobile">
                <span>6</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q4 2022</div>
                <div className="step_title">WEB PROFILE SYSTEM INTRODUCED</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step7 right_step" ref={el => sectionRefs.current[6] = el}>
              <div className="stepNumberMobile">
                <span>7</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q1 2023</div>
                <div className="step_title">
                  WHITEPAPER AND TOKEN WHITELIST RELEASE
                </div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step8 left_step" ref={el => sectionRefs.current[7] = el}>
              <div className="stepNumberMobile">
                <span>8</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2023</div>
                <div className="step_title">
                  CROSS-CHAIN INTEGRATION: BINANCE
                </div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step9 right_step" ref={el => sectionRefs.current[8] = el}>
              <div className="stepNumberMobile">
                <span>9</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2023</div>
                <div className="step_title">
                  CROSS-CHAIN INTEGRATION: POLYGON
                </div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                 
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step10 left_step" ref={el => sectionRefs.current[9] = el}>
              <div className="stepNumberMobile">
                <span>10</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">September 15th 2023</div>
                <div className="step_title">TWIN TOKEN SYSTEM LAUNCH</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step11 right_step" ref={el => sectionRefs.current[10] = el}>
              <div className="stepNumberMobile">
                <span>11</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q4 2023</div>
                <div className="step_title">VESEA TAKEOVER</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step12 left_step" ref={el => sectionRefs.current[11] = el}>
              <div className="stepNumberMobile">
                <span>12</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q4 2023</div>
                <div className="step_title">GBLOCK CLOSED BETA</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step13 right_step" ref={el => sectionRefs.current[12] = el}>
              <div className="stepNumberMobile">
                <span>13</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q4 2023</div>
                <div className="step_title">GBLOCK TOURNAMENTS</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step14 left_step" ref={el => sectionRefs.current[13] = el}>
              <div className="stepNumberMobile">
                <span>14</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q1 2024</div>
                <div className="step_title">VESEA TAKEOVER</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                 
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step15 right_step" ref={el => sectionRefs.current[14] = el}>
              <div className="stepNumberMobile">
                <span>15</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q1 2024</div>
                <div className="step_title">BLOCKCHAIN INTEGRATION IN-GAME</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step16 left_step" ref={el => sectionRefs.current[15] = el}>
              <div className="stepNumberMobile">
                <span>16</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q1 2024</div>
                <div className="step_title">
                  ELYSIUM INTEGRATION: GAME, LIQUIDITY FARM, +
                </div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step17 right_step" ref={el => sectionRefs.current[16] = el}>
              <div className="stepNumberMobile">
                <span>17</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2024</div>
                <div className="step_title">GBLOCK OPEN BETA RELEASE</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <div className="step step18 left_step" ref={el => sectionRefs.current[17] = el}>
              <div className="stepNumberMobile">
                <span>18</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2024</div>
                <div className="step_title">OPEN BETA TOURNAMENTS</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 811px) 811px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={rightBorder}
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
            <div className="step step19 right_step" ref={el => sectionRefs.current[18] = el}>
              <div className="stepNumberMobile">
                <span>19</span>
              </div>
              <div className="stepInfo">
                <div className="step_date">Q2 2024</div>
                <div className="step_title">CROSS-CHAIN MEGA TOURNAMENT</div>
              </div>
              <div className="step_footer">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  {/* <div style={{ maxWidth: "814px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='55' width='814' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div> */}
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  ></div>
                  <img
                    data-gatsby-image-ssr=""
                    data-main-image=""
                    style={{ opacity: 1 }}
                    sizes="(min-width: 814px) 814px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={leftBorder}
                    alt="border"
                  />
                </div>
              </div>
            </div>
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
              <li>
                <span>4</span>
              </li>
              <li>
                <span>5</span>
              </li>
              <li>
                <span>6</span>
              </li>
              <li>
                <span>7</span>
              </li>
              <li>
                <span>8</span>
              </li>
              <li>
                <span>9</span>
              </li>
              <li>
                <span>10</span>
              </li>
              <li>
                <span>11</span>
              </li>
              <li>
                <span>12</span>
              </li>
              <li>
                <span>13</span>
              </li>
              <li>
                <span>14</span>
              </li>
              <li>
                <span>15</span>
              </li>
              <li>
                <span>16</span>
              </li>
              <li>
                <span>17</span>
              </li>
              <li>
                <span>18</span>
              </li>
              <li>
                <span>19</span>
              </li>
            </ul>
          </div>
        </div>
        <a className="button__accent button__more" href="roadmap/index.html">
          <span>Learn more</span>
          <svg
            viewBox="0 0 11 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1099 10.5199L2.55988 0.56988C2.43978 0.416522 2.27499 0.304265 2.08831 0.248629C1.90163 0.192993 1.70228 0.196726 1.51782 0.259313C1.33335 0.321899 1.17288 0.440247 1.0586 0.597994C0.944322 0.755742 0.881871 0.945097 0.879883 1.13988V22.7099C0.883886 22.9038 0.947789 23.0918 1.06283 23.2479C1.17787 23.4041 1.33841 23.5209 1.52243 23.5822C1.70645 23.6436 1.90494 23.6465 2.09069 23.5906C2.27643 23.5346 2.44032 23.4226 2.55988 23.2699L10.1099 13.3299C10.4157 12.9253 10.5812 12.432 10.5812 11.9249C10.5812 11.4177 10.4157 10.9244 10.1099 10.5199Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
