import React from "react";
import mpaboveImage from "../../static/e3839e44817d32052bb0bf8af8dd5bba/64b11/mp_abovebg.png";
import bgImageMp from "../../static/mp_bg.webp"
export default function MarketPlaceSection() {
  return (
    <div>
      <div className="home-marketplace">
        <div className="titleSection">
          <div className="outlined">MARKETPLACE</div>
          <div className="regular">MARKETPLACE</div>
        </div>
        <div className="marketplace-outer-container">
          <div className="marketplace-inner-container">
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained mp_bg"
            >
              <div style={{ maxWidth: "1115px", display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='285' width='1115' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                data-placeholder-image=""
                style={{
                  opacity: 1,
                  transition: "opacity 0.5s linear",
                  backgroundColor: "#282828",
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
                style={{ opacity: 1 , height: "100% !important" }}
                sizes="(min-width: 1115px) 1115px, 100vw"
                decoding="async"
                loading="lazy"
                src={bgImageMp}
                alt=""
                className="marketplaceImage"
              />
            </div>
            <div className="gradientBg"></div>
            <div className="slidercontainer">
              <div className="sliderOuterContainer">
                <svg
                  viewBox="0 0 33 406"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="prevBtn"
                >
                  <path
                    d="M10.5799 204.45C10.1936 204.046 9.97803 203.509 9.97803 202.95C9.97803 202.391 10.1936 201.854 10.5799 201.45L20.5799 191.18L32.0499 179.4V226.5L20.5799 214.72L10.5799 204.45Z"
                    fill="white"
                  ></path>
                  <g opacity="0.5">
                    <path
                      d="M4.06977 204.25C3.72352 203.9 3.52931 203.427 3.52931 202.935C3.52931 202.443 3.72352 201.97 4.06977 201.62L19.0098 186.27L32.0098 172.88V0.459961H29.4398V172.28L15.8298 186.27L1.67977 200.79C1.12202 201.365 0.810059 202.134 0.810059 202.935C0.810059 203.736 1.12202 204.505 1.67977 205.08L15.8298 219.6L29.4498 233.6V405.41H32.0598V233L19.0598 219.61L4.06977 204.25Z"
                      fill="url(#paint0_linear_335_7820)"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_335_7820"
                      x1="16.4298"
                      y1="405.41"
                      x2="16.4298"
                      y2="0.459961"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.06"
                        stop-color="#E6E7E8"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.09"
                        stop-color="#E8E9EA"
                        stop-opacity="0.07"
                      ></stop>
                      <stop
                        offset="0.25"
                        stop-color="#F2F2F3"
                        stop-opacity="0.47"
                      ></stop>
                      <stop
                        offset="0.37"
                        stop-color="#F9F9F9"
                        stop-opacity="0.75"
                      ></stop>
                      <stop
                        offset="0.46"
                        stop-color="#FDFDFD"
                        stop-opacity="0.93"
                      ></stop>
                      <stop offset="0.51" stop-color="white"></stop>
                      <stop
                        offset="0.55"
                        stop-color="#FEFEFE"
                        stop-opacity="0.94"
                      ></stop>
                      <stop
                        offset="0.63"
                        stop-color="#FAFAFA"
                        stop-opacity="0.78"
                      ></stop>
                      <stop
                        offset="0.74"
                        stop-color="#F3F4F4"
                        stop-opacity="0.53"
                      ></stop>
                      <stop
                        offset="0.88"
                        stop-color="#EBEBEC"
                        stop-opacity="0.18"
                      ></stop>
                      <stop
                        offset="0.95"
                        stop-color="#E6E7E8"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  viewBox="0 0 32 406"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nextBtn"
                >
                  <path
                    d="M21.6401 201.42C22.0264 201.824 22.2421 202.361 22.2421 202.92C22.2421 203.479 22.0264 204.016 21.6401 204.42L11.6401 214.69L0.160156 226.5V179.37L11.6401 191.15L21.6401 201.42Z"
                    fill="white"
                  ></path>
                  <g opacity="0.5">
                    <path
                      d="M28.1499 201.62C28.4914 201.973 28.6824 202.444 28.6824 202.935C28.6824 203.426 28.4914 203.897 28.1499 204.25L13.1499 219.6L0.149902 232.99V405.41H2.75989V233.59L16.3799 219.59L30.5299 205.07C31.0877 204.495 31.3996 203.726 31.3996 202.925C31.3996 202.124 31.0877 201.355 30.5299 200.78L16.3799 186.26L2.75989 172.26V0.459961H0.149902V172.88L13.1499 186.27L28.1499 201.62Z"
                      fill="url(#paint0_linear_335_7821)"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_335_7821"
                      x1="15.7899"
                      y1="0.459961"
                      x2="15.7899"
                      y2="405.41"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.06"
                        stop-color="#E6E7E8"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.09"
                        stop-color="#E8E9EA"
                        stop-opacity="0.07"
                      ></stop>
                      <stop
                        offset="0.25"
                        stop-color="#F2F2F3"
                        stop-opacity="0.47"
                      ></stop>
                      <stop
                        offset="0.37"
                        stop-color="#F9F9F9"
                        stop-opacity="0.75"
                      ></stop>
                      <stop
                        offset="0.46"
                        stop-color="#FDFDFD"
                        stop-opacity="0.93"
                      ></stop>
                      <stop offset="0.51" stop-color="white"></stop>
                      <stop
                        offset="0.55"
                        stop-color="#FEFEFE"
                        stop-opacity="0.94"
                      ></stop>
                      <stop
                        offset="0.63"
                        stop-color="#FAFAFA"
                        stop-opacity="0.78"
                      ></stop>
                      <stop
                        offset="0.74"
                        stop-color="#F3F4F4"
                        stop-opacity="0.53"
                      ></stop>
                      <stop
                        offset="0.88"
                        stop-color="#EBEBEC"
                        stop-opacity="0.18"
                      ></stop>
                      <stop
                        offset="0.95"
                        stop-color="#E6E7E8"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="sliderInnerContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 360.73 360.7"
                    className="expander"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient-expander"
                        y1="180.35"
                        x2="360.73"
                        y2="180.35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#531880"></stop>
                        <stop offset="1" stop-color="#741685"></stop>
                      </linearGradient>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M312.08,28.11c-17.35,0-32.87.07-48.4,0-7.92,0-12.88-3.51-14.88-9.93-2.71-8.68,3.25-17.9,12.44-18C291.47-.1,321.7,0,351.94.09c5.62,0,8.67,3.23,8.68,8.81.07,30,.13,60,0,90a13.61,13.61,0,0,1-12.33,13.48,13.8,13.8,0,0,1-14.71-10,34,34,0,0,1-1.06-9.19c-.1-14.35,0-28.69,0-44.67-2.91,2.7-4.65,4.22-6.29,5.85C298,82.57,270,110.82,241.6,138.7c-3.14,3.08-8.21,5-12.66,5.73a9.87,9.87,0,0,1-11.33-7.38c-1-4.55,0-9.74,1-14.45.44-2,3.08-3.66,4.81-5.39q41.48-41.52,83-83C308,32.67,309.37,31,312.08,28.11Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M29.9,311.11Q58.79,282.06,87.67,253q15.77-15.83,31.61-31.58c6.73-6.66,15.54-7.29,21.31-1.71,6.06,5.88,5.51,14.73-1.49,21.74q-42.39,42.48-84.83,84.91c-1.54,1.55-3,3.16-5.21,5.49,2.52.25,4.14.55,5.76.56,13.78,0,27.56-.06,41.34.05,10.08.07,16.43,5.84,16.3,14.5-.12,8.33-6.39,13.71-16.21,13.72q-42.35.06-84.69,0C2.47,360.66,0,358.26,0,349.26Q0,306.59,0,263.9c0-9.6,5.17-15.44,13.51-15.65s14.37,6,14.53,15.64c.22,13.11.06,26.23.06,39.34v7.11Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M28.11,48.45c0,17.43.12,33,0,48.46-.1,10.4-7.31,17-16.41,15.41A13.5,13.5,0,0,1,.11,98.88q-.19-45,0-90C.11,3,3.48,0,9.38,0,38.92,0,68.46,0,98,.06c8.33,0,14.24,5.74,14.45,13.39s-5.34,13.8-13.58,14.49c-5.74.48-11.54.18-17.32.18-10.4,0-20.8,0-32.92,0,2.51,2.75,4,4.47,5.55,6.07,28.1,28.12,56.3,56.16,84.22,84.46a23.69,23.69,0,0,1,6,11.25c1.16,5.62-1.61,10.44-6.95,13.15s-10.73,2.43-15.59-1.39a49.56,49.56,0,0,1-4.34-4.12Q76.1,96.09,34.64,54.62C33,53,31.2,51.37,28.11,48.45Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M332.43,312c0-15.23,0-28.89,0-42.56a65.75,65.75,0,0,1,.21-8.66c1-7.81,7.09-12.89,14.65-12.56a13.57,13.57,0,0,1,13.32,13.86c.2,16.89.07,33.79.08,50.69,0,12.44.06,24.89,0,37.34-.05,7.65-2.85,10.51-10.42,10.52q-43.35.07-86.7,0c-9,0-14.93-5.28-15.3-13.25s5.66-14.48,14.66-14.85,17.78-.11,26.67-.12H312c-2.41-2.63-3.86-4.33-5.43-5.9-28-28-56-55.88-83.81-84.08A26.65,26.65,0,0,1,216.24,230c-1.2-5.4,1.89-10,6.91-12.48s10.33-2.49,15.09,1.05a47.35,47.35,0,0,1,4.87,4.54q41.52,41.47,83,83C327.78,307.77,329.53,309.32,332.43,312Z"
                        ></path>
                        <path
                          className="cls-2"
                          d="M312.08,28.11c-17.35,0-32.87.07-48.4,0-7.92,0-12.88-3.51-14.88-9.93-2.71-8.68,3.25-17.9,12.44-18C291.47-.1,321.7,0,351.94.09c5.62,0,8.67,3.23,8.68,8.81.07,30,.13,60,0,90a13.61,13.61,0,0,1-12.33,13.48,13.8,13.8,0,0,1-14.71-10,34,34,0,0,1-1.06-9.19c-.1-14.35,0-28.69,0-44.67-2.91,2.7-4.65,4.22-6.29,5.85C298,82.57,270,110.82,241.6,138.7c-3.14,3.08-8.21,5-12.66,5.73a9.87,9.87,0,0,1-11.33-7.38c-1-4.55,0-9.74,1-14.45.44-2,3.08-3.66,4.81-5.39q41.48-41.52,83-83C308,32.67,309.37,31,312.08,28.11Z"
                        ></path>
                        <path
                          className="cls-2"
                          d="M29.9,311.11Q58.79,282.06,87.67,253q15.77-15.83,31.61-31.58c6.73-6.66,15.54-7.29,21.31-1.71,6.06,5.88,5.51,14.73-1.49,21.74q-42.39,42.48-84.83,84.91c-1.54,1.55-3,3.16-5.21,5.49,2.52.25,4.14.55,5.76.56,13.78,0,27.56-.06,41.34.05,10.08.07,16.43,5.84,16.3,14.5-.12,8.33-6.39,13.71-16.21,13.72q-42.35.06-84.69,0C2.47,360.66,0,358.26,0,349.26Q0,306.59,0,263.9c0-9.6,5.17-15.44,13.51-15.65s14.37,6,14.53,15.64c.22,13.11.06,26.23.06,39.34v7.11Z"
                        ></path>
                        <path
                          className="cls-2"
                          d="M28.11,48.45c0,17.43.12,33,0,48.46-.1,10.4-7.31,17-16.41,15.41A13.5,13.5,0,0,1,.11,98.88q-.19-45,0-90C.11,3,3.48,0,9.38,0,38.92,0,68.46,0,98,.06c8.33,0,14.24,5.74,14.45,13.39s-5.34,13.8-13.58,14.49c-5.74.48-11.54.18-17.32.18-10.4,0-20.8,0-32.92,0,2.51,2.75,4,4.47,5.55,6.07,28.1,28.12,56.3,56.16,84.22,84.46a23.69,23.69,0,0,1,6,11.25c1.16,5.62-1.61,10.44-6.95,13.15s-10.73,2.43-15.59-1.39a49.56,49.56,0,0,1-4.34-4.12Q76.1,96.09,34.64,54.62C33,53,31.2,51.37,28.11,48.45Z"
                        ></path>
                        <path
                          className="cls-2"
                          d="M332.43,312c0-15.23,0-28.89,0-42.56a65.75,65.75,0,0,1,.21-8.66c1-7.81,7.09-12.89,14.65-12.56a13.57,13.57,0,0,1,13.32,13.86c.2,16.89.07,33.79.08,50.69,0,12.44.06,24.89,0,37.34-.05,7.65-2.85,10.51-10.42,10.52q-43.35.07-86.7,0c-9,0-14.93-5.28-15.3-13.25s5.66-14.48,14.66-14.85,17.78-.11,26.67-.12H312c-2.41-2.63-3.86-4.33-5.43-5.9-28-28-56-55.88-83.81-84.08A26.65,26.65,0,0,1,216.24,230c-1.2-5.4,1.89-10,6.91-12.48s10.33-2.49,15.09,1.05a47.35,47.35,0,0,1,4.87,4.54q41.52,41.47,83,83C327.78,307.77,329.53,309.32,332.43,312Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <div className="swiper customSwiper">
                    <div className="swiper-wrapper"></div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <div className="mpAbove-outer-container">
              <div className="mpAbove-inner-container">
                <div className="mpAbove-main-container">
                  <div
                    data-gatsby-image-wrapper=""
                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained mpAboveImg"
                  >
                    <div
                      aria-hidden="true"
                      data-placeholder-image=""
                      style={{
                        opacity: 1,
                        transition: "opacity 0.5s linear",
                      }}
                    ></div>

                    <img
                      style={{Opacity:1}}
                      sizes="(min-width: 2138px) 2138px, 100vw"
                      decoding="async"
                      loading="lazy"
                      src={mpaboveImage}
                      alt="mpImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vistBtnContainer">
          <div className="button button__accent">
            <span>MARKETPLACE </span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
