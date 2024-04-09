import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import team1 from "../../static/Michael-627ab5287c0b89bb6fab5ab05e544491.png";
import elliot from "../../static/Elliot-3b388d555bee4ef7ea00a3d680a5f6f1.png";
import Richard from "../../static/richard.png";
import Alan from "../../static/Alan.png";
import Kyle from "../../static/Kyle.png";

import Dinesh from "../../static/Dinesh.png";
import Sarvesh from "../../static/Sarvesh.png";
import Lester from "../../static/Lester.png";
import Jenson from "../../static/Jenson.png";
import biArrow from "../../static/2327bb1b91aa23c06d98c3badb1ef2de/ac378/bi_arrow-prev.png";
import gabrialImage from "../../static/Gabriel-d98667ca9c398ab7477d502a430d0539.png";
// import ronieeImage from "../../static/Ronnie-34135648c4d0f682a64bcc5f1090987f.png";
export default function Team() {

  return (
    <div>
      <div className="teamSection">
        <div className="titleSection">
          <div className="outlined">Team</div>
          <div className="regular">Team</div>
        </div>
        <div className="teamContainer">
          <div className="slick-slider center slick-initialized" dir="ltr">
            <div className="button__accent teamSliderArrow teamSliderLeft">
              <div
                data-gatsby-image-wrapper=""
                style={{ height: "17px" }}
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
                  sizes="(min-width: 29px) 29px, 100vw"
                  decoding="async"
                  loading="lazy"
                  src={biArrow}
                  alt="bi_arrow-prev"
                />
              </div>
            </div>
            <div className="slick-list" style={{ padding: "0 0" }}>
              <div
                className="slick-track"
                style={{ width: "800%", left: "-100.00000000000001%" }}
              >
                
                <div
                  data-index="-2"
                  tabIndex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "4.166666666666667%" }}
                >
                  <div>
                    <div
                      className="teamItem"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="inner">
                        <div className="photo">
                          <img
                            src="static/Alan.png"
                            alt=""
                          />
                          <div className="borderLine top_left"></div>
                          <div className="borderLine top_right"></div>
                          <div className="borderLine bottom_left"></div>
                          <div className="borderLine bottom_right"></div>
                        </div>
                        <div className="topInfo">
                          <span className="name">Alan Xin</span>
                          <span className="position">
                            Procedural material developer for planets
                          </span>
                        </div>
                        <div className="description">
                          <div>
                            Self taught 3D artist with three years of
                            experience, specialization in science fiction.
                            Projects have included modeling and texturing for
                            various film/game applications, as well as complete
                            3D rendered images and animations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="-1"
                  tabIndex="-1"
                  className="slick-slide slick-active slick-cloned"
                  aria-hidden="false"
                  style={{ width: "4.166666666666667%" }}
                >
                  <div>
                    <div
                      className="teamItem"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="inner">
                        <div className="photo">
                          <img src={elliot} alt="" />
                          <div className="borderLine top_left"></div>
                          <div className="borderLine top_right"></div>
                          <div className="borderLine bottom_left"></div>
                          <div className="borderLine bottom_right"></div>
                        </div>
                        <div className="topInfo">
                          <span className="name">Elliott Dunn</span>
                          <span className="position">
                            Procedural Material Developer for Backgrounds &
                            Stars
                          </span>
                        </div>
                        <div className="description">
                          <div>
                            Self taught 3D artist using online courses and
                            experimentation. Six years of experience with
                            Blender 3D. Previously focused on freelance 3D
                            tutoring, freelance product visualization, and
                            creating sci-fi renders as a hobby.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-center slick-current"
                  tabIndex="-1"
                  aria-hidden="false"
                  style={{ outline: "0", width: "4.166666666666667%" }}
                >
                  <div>
                    <div
                      className="teamItem"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="inner">
                        <div className="photo">
                          <img src={Richard} alt="" />
                          <div className="borderLine top_left"></div>
                          <div className="borderLine top_right"></div>
                          <div className="borderLine bottom_left"></div>
                          <div className="borderLine bottom_right"></div>
                        </div>
                        <div className="topInfo">
                          <span className="name">Richard Wayne. Saint Laurent</span>
                          <span className="position">
                          Innovator, Serial Entrepreneur
                          </span>
                        </div>
                        <div className="description">
                          <div>
                            Built his first algorithm for Evony 1 at 15 years old, 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //////////////////////////////////////// */}
                <div
                  data-index="1"
                  className="slick-slide slick-active"
                  tabIndex="-1"
                  aria-hidden="false"
                  style={{ outline: "0", width: "4.166666666666667%" }}
                >
                  <div>
                    <div
                      className="teamItem"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="inner">
                        <div className="photo">
                          <img src={Kyle} alt="" />
                          <div className="borderLine top_left"></div>
                          <div className="borderLine top_right"></div>
                          <div className="borderLine bottom_left"></div>
                          <div className="borderLine bottom_right"></div>
                        </div>
                        <div className="topInfo">
                          <span className="name">Kyle Chan</span>
                          <span className="position">
                            Engineer
                          </span>
                        </div>
                        <div className="description">
                          <div>
                            Full Stack and Blochchain Dev who codes in 27+ Languages
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                  className="slick-slide"
                  tabIndex="-1"
                  aria-hidden="true"
                  style={{ outline: 0, width: "4.166666666666667%" }}
                >
                  <div>
                    <div
                      className="teamItem"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="inner">
                        <div className="photo">
                          <img src={Dinesh} alt="" />
                          <div className="borderLine top_left"></div>
                          <div className="borderLine top_right"></div>
                          <div className="borderLine bottom_left"></div>
                          <div className="borderLine bottom_right"></div>
                        </div>
                        <div className="topInfo">
                          <span className="name">Gabriel Guerra</span>
                          <span className="position">
                            Chief Business officer
                          </span>
                        </div>
                        <div className="description">
                          <div>
                            Bachelors in International Business and Economics.
                            Business and marketing consultant for several start
                            up projects, currently in the board of directors for
                            one. 3+ years experience with financial advisory,
                            consulting and education; 2+ years in marketing
                            management.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button__accent teamSliderArrow teamSliderRight">
                  <svg
                    style={{ margin: "0 0.3vw" }}
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.55675e-07 7.5C6.36356e-07 7.72098 0.0903002 7.93291 0.251034 8.08917C0.41177 8.24543 0.629775 8.33321 0.857089 8.33321L21.0724 8.33322L15.6779 13.5758C15.5982 13.6533 15.535 13.7453 15.4918 13.8465C15.4487 13.9477 15.4265 14.0562 15.4265 14.1657C15.4265 14.2753 15.4487 14.3838 15.4918 14.485C15.535 14.5862 15.5982 14.6782 15.6779 14.7556C15.7575 14.8331 15.8521 14.8946 15.9563 14.9365C16.0604 14.9784 16.172 15 16.2847 15C16.3974 15 16.509 14.9784 16.6131 14.9365C16.7172 14.8946 16.8118 14.8331 16.8915 14.7556L23.7482 8.08992C23.828 8.01252 23.8913 7.92057 23.9346 7.81934C23.9778 7.71812 24 7.6096 24 7.5C24 7.3904 23.9778 7.28188 23.9346 7.18066C23.8913 7.07943 23.828 6.98748 23.7482 6.91008L16.8915 0.244351C16.8118 0.166882 16.7172 0.10543 16.6131 0.0635036C16.509 0.0215781 16.3974 -6.64638e-07 16.2847 -6.74491e-07C16.172 -6.84343e-07 16.0604 0.0215781 15.9563 0.0635035C15.8522 0.10543 15.7575 0.166882 15.6779 0.244351C15.5982 0.32182 15.535 0.413788 15.4918 0.515006C15.4487 0.616224 15.4265 0.72471 15.4265 0.834268C15.4265 0.943826 15.4487 1.05231 15.4918 1.15353C15.535 1.25475 15.5982 1.34672 15.6779 1.42419L21.0724 6.66678L0.857089 6.66678C0.629775 6.66678 0.411771 6.75457 0.251034 6.91082C0.0903003 7.06708 6.74994e-07 7.27902 6.55675e-07 7.5Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="button__accent button__more" href="team/index.html">
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



