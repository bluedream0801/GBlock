import React, { useState , useEffect} from 'react';
import mainLogo2 from "../../static/main_Logo-3.png";
import closeBetaImage from "../../static/92dbe28061041b3ff9a1c60c6e81117e/9a090/closedbeta-left.png";
import closedBetaRight from "../../static/ad25e275d6b88c468192d821030ba131/9fadd/closedbeta-right.jpg";
export default function JoinSection() {

  const [hoursTens, setHoursTens] = useState(0);
  const [hoursOnes, setHoursOnes] = useState(0);
  const [minutesTens, setMinutesTens] = useState(0);
  const [minutesOnes, setMinutesOnes] = useState(0);
  const [secondsTens, setSecondsTens] = useState(0);
  const [secondsOnes, setSecondsOnes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the counter every second
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setHoursTens(Math.floor(hours / 10));
      setHoursOnes(hours % 10);
      setMinutesTens(Math.floor(minutes / 10));
      setMinutesOnes(minutes % 10);
      setSecondsTens(Math.floor(seconds / 10));
      setSecondsOnes(seconds % 10);
    }, 1000);

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        <div className="signup-section mt-12">
          <div className="flex py-2 w-[100%]  md:w-auto  flex-wrap bg-gradient-to-r from-[#111213] to-[#0b4281] rounded-tr-full gap-4 justify-start items-center border border-[#B3B3B3] border-b-0 ">
            <div className="flex relative justify-start items-center gap-2 md:gap-4 w-full flex-row pl-8 skew-x-[-15deg]">
              <div
                data-gatsby-image-wrapper=""
                className="gatsby-image-wrapper gatsby-image-wrapper-constrained w-full flex gap-4"
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
                    style={{ opacity: 1 , width: "300px"}}
                    sizes="(min-width: 5654px) 5654px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={mainLogo2}
                    alt=""
                  />

                <div className="text-xs md:text-3xl text-center drop-shadow-hover-white px-0">
                  CLOSED BETA
                  <span className="font-bold text-[#73D7FF]">ROUND 3</span>
                </div>
              </div>
            </div>
            <div className="home-closedbeta relative flex flex-col md:flex-row border-y">
              <div className="leftSection relative w-[200%] h-full md:w-[66%] md:h-[60vh] overflow-hidden border-b border-b-[#9b9b9b] md:border-b-none md:border-r md:border-r-[#9b9b9b] flex justify-center items-center">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-full -ml-[50%] gatsby-image-wrappers"
                >
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 1,
                      transition: "opacity 0.5s linear",
                      backgroundColor: "#081818",
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
                    sizes="(min-width: 8064px) 8064px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={closeBetaImage}
                    alt=""
                  />
                </div>
                <div className="text-sm absolute px-2 -ml-[50%] drop-shadow-hover-white text-center md:text-right top-4 md:top-6 md:right-4 md:ml-0">
                  NEW MAPS, GALAXY MODE &amp; GAME LOBBY
                </div>
              </div>
              <div className="rightSection relative w-full h-[40vh] md:w-[34%] md:h-[60vh] overflow-hidden">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-full"
                >
                  <div style={{ maxWidth: "1919px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='1081' width='1919' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
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
                      backgroundColor: "#080808",
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
                    sizes="(min-width: 1919px) 1919px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src={closedBetaRight}
                    alt=""
                  />
                </div>
                <div className="absolute right-0 top-0 w-full h-full">
                  <div className="counterContainer flex relative items-center justify-end w-full h-full">
                    <div className="counter-container w-full h-full flex flex-col gap-2 md:gap-4 justify-center items-right bg-gradient-to-br from-[#0D3446a6] to-[#0B0D118A]">
                      <div className="p-8 flex flex-col items-end gap-4 md:gap-8">
                        <div className="desc1 text-xl md:text-3xl font-montserrat font-bold drop-shadow-hover-white">
                          BE THE FIRST TO PLAY
                        </div>
                        <div className="desc2 text-lg md:text-2xl drop-shadow-hover-white">
                          JOIN THE WHITELIST TODAY
                        </div>
                        <div className="counter-app-container rounded-lg bg-transparent flex items-center justify-center w-full gap-2">
      <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg flex justify-between">
        <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg text-lg md:text-2xl flex items-center justify-center w-6 h-9 md:w-8 md:h-12">
          {hoursTens}
        </div>
        <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg text-lg md:text-2xl flex items-center justify-center w-6 h-9 md:w-8 md:h-12">
          {hoursOnes}
        </div>
      </div>
      <span className="text-lg">:</span>
      <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg flex justify-between">
        <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg text-lg md:text-2xl flex items-center justify-center w-6 h-9 md:w-8 md:h-12">
          {minutesTens}
        </div>
        <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg text-lg md:text-2xl flex items-center justify-center w-6 h-9 md:w-8 md:h-12">
          {minutesOnes}
        </div>
      </div>
      <span className="text-lg">:</span>
      <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg flex justify-between">
        <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg text-lg md:text-2xl flex items-center justify-center w-6 h-9 md:w-8 md:h-12">
          {secondsTens}
        </div>
        <div className="bg-gradient-to-br from-[#2e2e2ec5] to-[#a7a7a773] rounded-lg text-lg md:text-2xl flex items-center justify-center w-6 h-9 md:w-8 md:h-12">
          {secondsOnes}
        </div>
      </div>
    </div>
                        <div className="desc2 text-sm -mt-2 drop-shadow-hover-white">
                          LIMITED TIME OFFER
                        </div>
                      </div>
                      <div className="flex justify-end hover:cursor-pointer mr-8">
                        <div className="signupBtnContainer border p-1 md:p-2 rounded-tl-4xl rounded-br-4xl transition-all w-fit">
                          <div className="relative border px-8 py-2 rounded-tl-[1.8rem] rounded-br-[1.8rem] md:rounded-tl-3xl md:rounded-br-3xl transition-all w-fit bg-gradient-to-r from-[#3069A180] to-[#072D5480] overflow-hidden">
                            <svg
                              id="Layer_2"
                              data-name="Layer 2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 117.74 122.29"
                              className="absolute -bottom-4 -left-4 w-16"
                            >
                              <g id="Layer_1-2" data-name="Layer 1">
                                <path
                                  opacity=".44"
                                  stroke-width="0"
                                  d="m82.82,17.43c2.11,0,4.04,1.95,4.3,4.35.26,2.4-1.23,4.35-3.34,4.35s-4.04-1.95-4.3-4.35c-.26-2.4,1.23-4.35,3.34-4.35h0Zm3.21-9.91c2.11,0,4.04,1.95,4.3,4.35.26,2.4-1.23,4.35-3.34,4.35s-4.04-1.95-4.3-4.35c-.26-2.4,1.23-4.35,3.34-4.35Zm6.13,16.08c2.11,0,4.04,1.95,4.3,4.35.26,2.4-1.23,4.35-3.34,4.35s-4.04-1.95-4.3-4.35c-.26-2.4,1.23-4.35,3.34-4.35Zm2.43-9.21c2.11,0,4.04,1.95,4.3,4.35.26,2.4-1.23,4.35-3.34,4.35s-4.04-1.95-4.3-4.35c-.26-2.4,1.23-4.35,3.34-4.35Zm-25.62,7.96c1.56,0,2.95,1.38,3.09,3.08.15,1.7-1,3.08-2.56,3.08s-2.95-1.38-3.09-3.08c-.15-1.7,1-3.08,2.56-3.08Zm-9.6,2.38c1.66,0,3.13,1.46,3.28,3.27.15,1.8-1.06,3.27-2.72,3.27s-3.13-1.46-3.28-3.27c-.15-1.8,1.06-3.27,2.72-3.27Zm-7.26,21.5l4.01-1.17c1.57-.46,1.96.1,2.46,1.57l1.29,3.79,3.6-1.33c1.01-.37,1.55-.56,1.95.49l1.97,5.11c.56,1.45-.13,1.76-1.47,2.32-1.1.46-2.21.92-3.33,1.37l1.19,3.5c.63,1.84,1,2.22-.86,3.01l-3.86,1.65c-1.83.78-1.83.42-2.38-1.23l-1.37-4.08c-1.21.45-2.42.89-3.63,1.31-1.5.52-2.21,1.02-2.82-.63l-1.85-4.97c-.62-1.66.45-1.94,1.81-2.44l3.76-1.39-1.3-3.86c-.37-1.1-.62-2.59.85-3.02Zm-12.95-3.86c-1.45,1.89-3.76,3.08-6.52,3.08-5.19,0-9.99-4.2-10.72-9.38-.46-3.27.81-6.15,3.11-7.83-1.27,1.66-1.88,3.87-1.54,6.3.73,5.18,5.53,9.38,10.72,9.38,1.91,0,3.6-.57,4.95-1.55Zm50.75,10.3c-.97.67-2.14,1.06-3.44,1.06-3.95,0-7.6-3.54-8.16-7.91-.49-3.81,1.54-7,4.69-7.74-1.96,1.37-3.07,3.92-2.69,6.85.56,4.37,4.21,7.91,8.16,7.91.5,0,.99-.06,1.44-.17Zm-56.17-29.63c5.19,0,9.99,4.2,10.72,9.38.73,5.18-2.88,9.38-8.06,9.38s-9.99-4.2-10.72-9.38c-.73-5.18,2.88-9.38,8.06-9.38Zm55.22,12.85c3.95,0,7.6,3.54,8.16,7.91.56,4.37-2.19,7.91-6.14,7.91s-7.6-3.54-8.16-7.91c-.56-4.37,2.19-7.91,6.14-7.91Zm5.11,25.82c6.69-2.49,12.48-3.21,15.93,6.83-4.25-12.38-10.77-9.5-18.84-5.7,1.44,2.36,4.5,6.34,6.43,8.29,2.11,2.15,4.62,3.8,7.71,4.39,5.45,1.04,6.98-.92,9.83-5.19,1.86-2.79,2.59-6.36,2.63-10.06.11-11.29-6.27-24.35-11.59-34.05-3.55-6.47-7.46-12.73-11.37-18.95h0s-.23-.37-.23-.37c-1.46-2.33-1.92-3.07-4.54-4.26-1.23-.56-2.41-.98-3.61-1.35-1.21-.37-2.47-.68-3.8-1.01-2.01-.49-3.7-.29-5.23.36-1.6.68-3.07,1.86-4.55,3.27l-.24.23c-10.75,2.03-21.49,4.07-32.24,6.1l-.19-.03c-.84-.13-1.44-.24-2.04-.34-3.42-.6-7.06-1.24-10.13-.02-5.26,2.11-10.43,4.88-14.97,8.4-3.98,3.08-7.48,6.74-10.14,11.02-1.04,1.67-1.69,2.88-2.07,4.11-.38,1.24-.52,2.58-.54,4.52L0,73.03c-.05,6.11.11,15.6,1.63,24.61,1.79,10.66,6.6,25.84,20.21,24.57,8.02-.75,12-8.78,15.87-14.87,2.44-3.84,4.71-7.74,6.91-11.71,3.69-6.66,8.46-15.27,15.21-18.73,6.94-3.56,14.08-6.74,21.26-9.82,4.28-1.83,8.62-3.76,12.97-5.38Z"
                                ></path>
                              </g>
                            </svg>
                            <span className="text-md md:text-xl font-bold relative z-1">
                              JOIN THE BETA
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
