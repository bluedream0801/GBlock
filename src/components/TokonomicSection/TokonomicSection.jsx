import React , { useEffect } from "react";
import coinImage from "../../static/coin.webp";
export default function TokonomicSection() {
  
  useEffect(() => {
    function handleScroll() {
      const rotatingImage = document.getElementById("rotatingImage");
      const rotationAngle = window.scrollY / 2; // Adjust the division factor for desired rotation speed
      
      rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
      <div>
        <div className="tokenomicsSection">
          <div className="titleSection">
            <div className="outlined">Tokenomics</div>
            <div className="regular">Tokenomics</div>
          </div>
          <hr />
          <div className="text">
            <div className="tokenomicsSection__flex">
              <ul>
                <li className="list-title">$GBLOCK</li>
                <li>
                  Stake $GBLOCK to receive $GBLOCK and $GCRED: Generate Secondary
                  Tokens via Primary Token Staking.
                </li>
                <li>
                  Governance Utility: Use $GBLOCK to Vote on Game Features &amp;
                  DAO Proposals.
                </li>
                <li>
                  Game Utility: Use $GBLOCK to activate special features,
                  abilities, and civilization-level functions.
                </li>
                <li>
                  Acquire NFTs: New game item NFTs launched will be acquired
                  only through $GBLOCK!
                </li>
              </ul>
              <ul>
                <li className="list-title">$GCRED</li>
                <li>Inflationary: No Max Supply</li>
                <li>
                  Foundation and DAO-directed Supply Shock Mechanisms will
                  combat inflation.
                </li>
                <li>
                  Principal In-Game Currency: use $GCRED to buy, upgrade, sell
                  (P2P), and create in-game items, characters, vehicles, and
                  more.
                </li>
              </ul>
            </div>
          </div>
          <div className="tokenomics_img tokenomics_img_desktop">
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
              id="rotatingImage"
                data-gatsby-image-ssr=""
                data-main-image=""
                style={{ opacity: 1 }}
                sizes="(min-width: 726px) 726px, 100vw"
                decoding="async"
                loading="lazy"
                src={coinImage}
                alt="coin"
              />
            </div>
          </div>
          <a
            className="button__accent button__more"
            href="tokenomics/index.html"
          >
            <span>Tokenomics</span>
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
