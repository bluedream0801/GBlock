/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerInfo">
          <div className="footerDescription mobOreder5">
            <div className="main_logo"></div>
            <div className="footerTextGroup">
              <p className="footerColText bold">
                The Leading Web3 Gaming Firm on the OmniX Blockchain.
              </p>
              <p className="footerColText">
                An Open-World Sci-Fi MMORPG with P2P enabled in-game economies
                full of digital assets. Explore the stars, Create Empires, Trade
                Resources and Battle other players in the Verified Galaxy.
              </p>
            </div>
          </div>
          <div className="menu1 mobOreder1">
            <ul className="footerMenu">
              <li className="menuHead">Marketplace</li>
              <li className="marketplace_link">
                <a
                  className="uppercase"
                  href="marketplace/index.html"
                >
                  Marketplace
                </a>
              </li>
              <li className="marketplace_link">
                <a
                  className="uppercase"
                  href="coordmarketplace/index.html"
                >
                  Coordinate MP
                </a>
              </li>
            </ul>
          </div>
          <div className="menu1 mobOreder2">
            <ul className="footerMenu">
              <li className="menuHead">ExoWorlds</li>
              <li className="collectionS_link">
                <a
                  className="uppercase"
                  href="collections/index.html"
                >
                  Collections
                </a>
              </li>
              <li className="attributes_link">
                <a
                  className="uppercase"
                  href="attributes/index.html"
                >
                  Attributes
                </a>
              </li>
            </ul>
          </div>
          <div className="menu2 mobOreder3">
            <ul className="footerMenu">
              <li className="menuHead">MetaVerse</li>
              <li className="gameplay_link">
                <a
                  className="uppercase"
                  href="comingsoon/index.html"
                >
                  Gameplay
                </a>
              </li>
              <li className="mythology_link">
                <a
                  className="uppercase"
                  href="comingsoon/index.html"
                >
                  Mythology
                </a>
              </li>
              <li className="tokenomics_link">
                <a
                  className="uppercase"
                  href="tokenomics/index.html"
                >
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>
          <div className="menu3 mobOreder4">
            <ul className="footerMenu">
              <li className="menuHead">About</li>
              <li className="team_link">
                <a className="uppercase" href="team/index.html">
                  Team
                </a>
              </li>
              <li className="roadmap_link">
                <a className="uppercase" href="roadmap/index.html">
                  Roadmap
                </a>
              </li>
              <li className="contact_link">
                <a className="uppercase" href="contact/index.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="menu4 mobOreder6 link-group">
            <a
              href="https://discord.gg/exoworlds"
              className="linkItem discord"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://twitter.com/ExoWorldsNFT"
              className="linkItem twitter"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://www.instagram.com/exoworlds.io/"
              className="linkItem instagram"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://t.me/+hmvHOCKmyj4zZWZi"
              className="linkItem telegram"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://www.facebook.com/profile.php?id=100090356112634"
              className="linkItem facebook"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://medium.com/@ExoWorlds"
              className="linkItem medium"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
             rel="noreferrer"
              href="https://www.youtube.com/channel/UCL_u6AbwF7DYrywzgLoKb7A"
              target="_blank"
              className="linkItem youtube"
            ></a>
            <a
              href="https://www.linkedin.com/company/exoworldsnft/"
              className="linkItem linkedin"
            ></a>
          </div>
        </div>
      </div>
      <div className="privacy_links">
        <div className="privacy">
          <span>© GBlock 2024</span>
          <a className="privacyLink" href="privacy/index.html">
            Privacy Policy
          </a>
          <a href="terms/index.html">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
