/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import mainLogo2 from "../../static/8ca5247b6d4d3f4e6ffc52e3629ba81f/9e992/main_logo-2.png";
import telegramIcon from "../../static/telegram_link-5a88893fee62eef4675a8e2695ef402e.png";
import coinImage from "../../static/coin.webp";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className=" disconnected">
      <div className="header_container">
        <div className="header_container">
          <a aria-current="page" className="mobileLogo" href="/">
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained logo"
            >
              <div style={{ maxWidth: "5654px", display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='637' width='5654' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
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
                  opacity: 0,
                  transition: "opacity 500ms linear",
                  backgroundColor: "#e8e8f8",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  objectFit: "cover",
                }}
              ></div>
              <img
                width="5654"
                height="637"
                data-main-image=""
                style={{ objectFit: "cover", opacity: 1 }}
                sizes="(min-width: 5654px) 5654px, 100vw"
                decoding="async"
                loading="lazy"
                src={mainLogo2}
                alt="logo"
              />
            </div>
          </a>
          <a aria-current="page" className="desktopLogo" href="/"></a>

          <ul className="menu">
            <li className="dropdown">
              <a>Marketplace</a>
              <ul className="subMenu">
                <li className="nftMp">
                  <a href="/marketplace">Planets</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 31.59 27.95"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M18.36,10.76l1,4.75a3.67,3.67,0,0,0,2.83,2.83l4.75,1-4.75,1a3.7,3.7,0,0,0-2.83,2.83l-1,4.75-1-4.75a3.7,3.7,0,0,0-2.83-2.83l-4.75-1,4.75-1a3.67,3.67,0,0,0,2.83-2.83Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M5.54,10.26a2.71,2.71,0,0,1-2.07,2.07L0,13.07l3.47.74a2.71,2.71,0,0,1,2.07,2.07l.75,3.48L7,15.88A2.71,2.71,0,0,1,9.1,13.81l3.48-.74L9.1,12.33A2.71,2.71,0,0,1,7,10.26L6.29,6.78Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M25.77,7.42a2.21,2.21,0,0,1-1.71,1.71l-2.88.62,2.88.61a2.23,2.23,0,0,1,1.71,1.72L26.39,15,27,12.08a2.26,2.26,0,0,1,1.72-1.72l2.87-.61-2.87-.62A2.23,2.23,0,0,1,27,7.42l-.61-2.88Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M14.18,2.51A2,2,0,0,1,12.68,4l-2.51.53,2.51.54a2,2,0,0,1,1.5,1.5l.54,2.51.53-2.51a2,2,0,0,1,1.5-1.5l2.51-.54L16.75,4a2,2,0,0,1-1.5-1.5L14.72,0Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="coordMp">
                  <a href="/coordmarketplace">Coordinates</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a>DIGITAL ASSETS</a>
              <ul className="subMenu">
                <li className="collection">
                  <a href="/collections">Collections</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 31.59 27.95"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M18.36,10.76l1,4.75a3.67,3.67,0,0,0,2.83,2.83l4.75,1-4.75,1a3.7,3.7,0,0,0-2.83,2.83l-1,4.75-1-4.75a3.7,3.7,0,0,0-2.83-2.83l-4.75-1,4.75-1a3.67,3.67,0,0,0,2.83-2.83Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M5.54,10.26a2.71,2.71,0,0,1-2.07,2.07L0,13.07l3.47.74a2.71,2.71,0,0,1,2.07,2.07l.75,3.48L7,15.88A2.71,2.71,0,0,1,9.1,13.81l3.48-.74L9.1,12.33A2.71,2.71,0,0,1,7,10.26L6.29,6.78Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M25.77,7.42a2.21,2.21,0,0,1-1.71,1.71l-2.88.62,2.88.61a2.23,2.23,0,0,1,1.71,1.72L26.39,15,27,12.08a2.26,2.26,0,0,1,1.72-1.72l2.87-.61-2.87-.62A2.23,2.23,0,0,1,27,7.42l-.61-2.88Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M14.18,2.51A2,2,0,0,1,12.68,4l-2.51.53,2.51.54a2,2,0,0,1,1.5,1.5l.54,2.51.53-2.51a2,2,0,0,1,1.5-1.5l2.51-.54L16.75,4a2,2,0,0,1-1.5-1.5L14.72,0Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="attribute">
                  <a href="/attributes">Attributes</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">MetaVerse</a>
              <ul className="subMenu">
                <li className="gameplay">
                  <a href="#">Gameplay</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="tokenomics">
                  <a href="/tokenomics">Tokenomics</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="mythology">
                  <a href="#">Mythology</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a>About</a>
              <ul className="subMenu">
                <li className="team">
                  <a href="/team">Team</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="roadmap">
                  <a href="/roadmap">Roadmap</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="contact">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </li>

            <li className="dropdown" style={{ minWidth: "8vw" }}>
              <a>
                <div
                  className="translate"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    columnGap: "16px",
                  }}
                >
                  <p className="header_language_text_mobile">Language</p>
                </div>
              </a>
              <ul className="subMenu">
                <li
                  className="english"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <a
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    English
                  </a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: "0.47" }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="portuguese">
                  <a
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Português
                  </a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: "0.47" }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="chinese">
                  <a
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    汉语
                  </a>
                </li>
              </ul>
            </li>
            <li className="header_icons">
              <a
                href="#"
                className="whitepaper"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"></path>
                </svg>
              </a>
            </li>
            <li className="header_icons">
              <a
                href="https://discord.gg/exoworlds"
                className="discord"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="header_icons">
              <a
                href="https://twitter.com/ExoWorldsNFT"
                className="twitter"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="header_icons">
              <a
                href="https://www.instagram.com/exoworldsbrasil/"
                target="_blank"
                className="instagram"
                rel="noreferrer"
              ></a>
            </li>
            <li className="header_icons">
              <a
                href="https://t.me/+hmvHOCKmyj4zZWZi"
                className="telegram"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="dropdown header_icons_mobile">
              <a>Social Links</a>
              <ul className="item_opened subMenu">
                <li className="header_icons">
                  <a
                    href="https://discord.gg/exoworlds"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 25 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1135 1.75241C19.585 1.04963 17.9467 0.530187 16.2335 0.234816C16.2182 0.23183 16.2024 0.233754 16.1883 0.240324C16.1742 0.246893 16.1624 0.257782 16.1546 0.271483C15.9448 0.647317 15.711 1.13723 15.5472 1.52426C13.7302 1.24747 11.8829 1.24747 10.0658 1.52426C9.88337 1.09532 9.6776 0.677083 9.44948 0.271483C9.44175 0.257614 9.43005 0.246478 9.41595 0.239563C9.40185 0.232647 9.38602 0.230281 9.37056 0.232779C7.65833 0.52815 6.02002 1.0476 4.49059 1.75139C4.47743 1.75702 4.46628 1.76662 4.45862 1.77889C1.34983 6.43863 0.497704 10.9833 0.916273 15.4709C0.917438 15.4819 0.920784 15.4925 0.926108 15.5021C0.931431 15.5118 0.938622 15.5202 0.947241 15.5269C2.76176 16.8738 4.78562 17.8999 6.93407 18.5621C6.94905 18.5668 6.96507 18.5668 6.98004 18.5621C6.99501 18.5573 7.00823 18.5481 7.01799 18.5356C7.47951 17.9041 7.89109 17.237 8.24273 16.5362C8.2637 16.4955 8.24372 16.4466 8.20177 16.4303C7.55644 16.1825 6.93116 15.8835 6.33169 15.5361C6.32092 15.5298 6.31185 15.5209 6.30528 15.5102C6.29871 15.4994 6.29486 15.4872 6.29407 15.4746C6.29327 15.462 6.29557 15.4494 6.30074 15.4379C6.30591 15.4264 6.3138 15.4164 6.3237 15.4087C6.44957 15.314 6.57544 15.2152 6.69532 15.1164C6.70611 15.1075 6.71911 15.1019 6.73286 15.1001C6.74662 15.0983 6.7606 15.1004 6.77324 15.1062C10.6962 16.9029 14.9448 16.9029 18.8218 15.1062C18.8345 15.1001 18.8486 15.0977 18.8626 15.0993C18.8765 15.1009 18.8898 15.1065 18.9007 15.1154C19.0206 15.2152 19.1455 15.314 19.2724 15.4087C19.2824 15.4162 19.2904 15.4261 19.2957 15.4375C19.3011 15.4489 19.3035 15.4614 19.3029 15.474C19.3024 15.4867 19.2987 15.4989 19.2923 15.5097C19.2859 15.5206 19.277 15.5296 19.2664 15.5361C18.669 15.8864 18.0476 16.1828 17.3953 16.4293C17.3853 16.433 17.3762 16.4389 17.3685 16.4464C17.3609 16.454 17.3549 16.4632 17.3511 16.4733C17.3472 16.4834 17.3455 16.4943 17.346 16.5051C17.3466 16.516 17.3494 16.5266 17.3543 16.5362C17.714 17.236 18.1255 17.9021 18.5781 18.5346C18.5875 18.5476 18.6006 18.5573 18.6156 18.5624C18.6306 18.5675 18.6468 18.5677 18.662 18.5631C20.8141 17.9027 22.8413 16.8762 24.6578 15.5269C24.6667 15.5206 24.6741 15.5124 24.6796 15.5029C24.6851 15.4934 24.6886 15.4829 24.6898 15.4719C25.1893 10.2835 23.8526 5.77557 21.1444 1.78093C21.1378 1.76795 21.1268 1.75783 21.1135 1.75241ZM8.82912 12.7382C7.64834 12.7382 6.67434 11.6494 6.67434 10.3141C6.67434 8.9778 7.62936 7.89002 8.82912 7.89002C10.0379 7.89002 11.0029 8.98697 10.9839 10.3141C10.9839 11.6504 10.0289 12.7382 8.82912 12.7382ZM16.7959 12.7382C15.6141 12.7382 14.6411 11.6494 14.6411 10.3141C14.6411 8.9778 15.5952 7.89002 16.7959 7.89002C18.0047 7.89002 18.9697 8.98697 18.9507 10.3141C18.9507 11.6504 18.0057 12.7382 16.7959 12.7382Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span style={{ marginLeft: "20px" }}>Discord</span>
                  </a>
                </li>
                <li className="header_icons">
                  <a
                    href="https://twitter.com/ExoWorldsNFT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8404 5.17267C20.1043 5.49882 19.3136 5.71918 18.4824 5.81879C19.3401 5.30559 19.9818 4.49788 20.2877 3.54636C19.4819 4.02499 18.6 4.36189 17.6803 4.54242C17.0618 3.88208 16.2427 3.4444 15.35 3.29732C14.4573 3.15025 13.541 3.30201 12.7434 3.72905C11.9458 4.15608 11.3115 4.83451 10.9389 5.65898C10.5664 6.48346 10.4765 7.40786 10.6832 8.28867C9.05041 8.20669 7.45313 7.78231 5.995 7.04307C4.53687 6.30383 3.25047 5.26625 2.21929 3.99767C1.8667 4.60589 1.66396 5.31106 1.66396 6.06207C1.66357 6.73816 1.83006 7.40389 2.14866 8.00019C2.46727 8.5965 2.92813 9.10494 3.49037 9.48042C2.83832 9.45967 2.20067 9.28348 1.63047 8.96652V9.01941C1.6304 9.96764 1.9584 10.8867 2.55882 11.6206C3.15923 12.3546 3.99507 12.8581 4.92452 13.046C4.31964 13.2097 3.68547 13.2338 3.06991 13.1165C3.33214 13.9324 3.84295 14.6459 4.53083 15.157C5.2187 15.6682 6.0492 15.9514 6.90607 15.9672C5.45149 17.109 3.6551 17.7284 1.80588 17.7257C1.47831 17.7258 1.15101 17.7066 0.825684 17.6684C2.70275 18.8753 4.8878 19.5158 7.11938 19.5133C14.6736 19.5133 18.8033 13.2566 18.8033 7.8303C18.8033 7.65401 18.7989 7.47595 18.7909 7.29966C19.5942 6.71875 20.2876 5.9994 20.8386 5.17532L20.8404 5.17267Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span style={{ marginLeft: "20px" }}>Twitter</span>
                  </a>
                </li>
                <li className="header_icons"></li>
                <li className="header_icons">
                  <a
                    href="https://t.me/+hmvHOCKmyj4zZWZi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      data-gatsby-image-wrapper=""
                      className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                      <div style={{ maxWidth: "17px", display: "block" }}>
                        <img
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                          src="data:image/svg+xml;charset=utf-8,%3Csvg height='17' width='17' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
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
                          opacity: "0",
                          transition: "opacity 500ms linear 0s",
                          backgroundColor: "rgb(248, 248, 248)",
                          position: "absolute",
                          inset: "0px",
                          objectFit: "cover",
                        }}
                      ></div>
                      <img
                        width="17"
                        height="17"
                        data-main-image=""
                        style={{ objectFit: "cover", opacity: "1" }}
                        sizes="(min-width: 17px) 17px, 100vw"
                        decoding="async"
                        loading="lazy"
                        src={telegramIcon}
                        alt="telegram"
                      />
                    </div>
                    <span style={{ marginLeft: "20px" }}>Telegram</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative z-10">
              <div
                id="connectWalletButton"
                className="flex items-center font-montserrat"
              >
                <div className="connectIcon"></div>
                <span className="uppercase text-[0.7vw] connect_btn_text">
                  connect
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="overlay"></div>
        <div className="joinWhitelistButton">
          <div className="joinWhitelistContainer">
            <div className="joinWhitelistOuterContainer">
              <div
                data-gatsby-image-wrapper=""
                className="gatsby-image-wrapper gatsby-image-wrapper-constrained coin"
              >
                <div
                  aria-hidden="true"
                  data-placeholder-image=""
                  style={{
                    opacity: 1,
                    transition: "opacity 500ms linear",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    objectFit: "cover",
                  }}
                ></div>
                <img
                  width={toggle ? "100px" : "80px"}
                  data-main-image=""
                  style={{ objectFit: "cover", opacity: "1" }}
                  sizes="(min-width: 726px) 726px, 100vw"
                  decoding="async"
                  loading="lazy"
                  src={coinImage}
                  alt=""
                />
              </div>
              {toggle && (
                <div className="joinWhitelistInnerContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20.22 21.06"
                    className="closeBtn"
                    onClick={() => setToggle(false)}
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M17.45,14.93h0s-4.18-4.4-4.18-4.4l4.16-4.39h0s2.15-2.27,2.15-2.27c.46-.48,.68-1.14,.62-1.8-.05-.55-.3-1.07-.7-1.45-.43-.41-.99-.63-1.58-.63,0,0-.01,0-.02,0-.63,0-1.22,.26-1.65,.71l-6.15,6.48L3.96,.71C3.53,.26,2.94,0,2.31,0,1.71,0,1.15,.22,.71,.63,.31,1.01,.06,1.53,.01,2.08c-.06,.66,.16,1.32,.62,1.8l6.32,6.66L2.74,14.97h0s-2.11,2.22-2.11,2.22c-.46,.48-.68,1.14-.62,1.8,.05,.55,.3,1.07,.7,1.45,.43,.41,.99,.63,1.58,.63,0,0,.01,0,.02,0,.63,0,1.22-.26,1.65-.71l6.15-6.48,6.15,6.48c.43,.46,1.02,.71,1.65,.71,.6,0,1.16-.22,1.6-.63,.4-.38,.65-.9,.7-1.45,.06-.66-.16-1.32-.62-1.8l-2.14-2.25Z"
                      ></path>
                    </g>
                  </svg>
                  <div className="tokenPriceContainer">
                    <span className="font-brave text-lg">WHITELIST TO</span>
                  </div>
                  <div className="joinBtn">
                    <div className="btn font-brave text-2xl">CLOSED BETA</div>
                  </div>
                </div>
              )}

              {!toggle && (
                <div
                  className="joinWhitelistInnerContainer"
                  onClick={() => setToggle(true)}
                >
                  <div className="tokenPriceContainer">
                    <svg
                      viewBox="0 0 84 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M82.3292 33.7501C82.0389 33.739 81.7545 33.8347 81.5297 34.0189C81.305 34.2031 81.1554 34.4632 81.1092 34.7501C81.0392 35.9401 80.9192 37.1501 80.7592 38.3501C79.5004 45.8935 75.9658 52.872 70.6292 58.3501C68.0548 61.0223 65.0239 63.2133 61.6792 64.8201C58.6116 66.316 55.2593 67.1381 51.8477 67.2313C48.436 67.3244 45.0439 66.6864 41.8992 65.3601C41.5692 65.2201 41.2392 65.0701 40.8992 64.9001C40.6794 64.7972 40.502 64.6213 40.3973 64.4024C40.2925 64.1834 40.2668 63.935 40.3246 63.6992C40.3823 63.4635 40.52 63.2551 40.7141 63.1094C40.9082 62.9637 41.1468 62.8897 41.3892 62.9001H41.5692C46.3891 63.7165 51.3432 63.0541 55.7792 61.0001C60.5729 58.8045 64.6493 55.3001 67.5392 50.8901C70.5394 46.407 72.1627 41.1442 72.2092 35.7501C72.2092 34.8601 72.2092 33.9501 72.0792 33.0501C71.5912 25.6426 68.7934 18.5746 64.0792 12.8401C59.4543 7.30783 53.5506 2.98642 46.8792 0.250059L46.7392 0.180059L46.3092 0.0600586H46.0592H45.6292H45.8692L45.6592 0.12006C45.435 0.211273 45.2409 0.36375 45.0992 0.560059C45.0584 0.624331 45.0216 0.691133 44.9892 0.760059L44.9192 1.03006C44.8931 1.22292 44.9172 1.41926 44.9892 1.60006L45.0992 1.79006L45.2392 1.95006L45.4192 2.10006L45.6192 2.21006C51.7412 4.90046 57.046 9.15672 60.9992 14.5501C65.1192 20.1401 67.3892 26.4901 67.3792 32.4201C67.3991 37.8325 65.4919 43.0753 61.9992 47.2101C61.7492 47.5201 61.4792 47.8201 61.1992 48.1101C61.1037 48.2131 60.9876 48.2948 60.8583 48.35C60.7291 48.4051 60.5897 48.4324 60.4492 48.4301C60.227 48.4282 60.0107 48.3584 59.8292 48.2301C59.6259 48.0782 59.4838 47.8585 59.4288 47.6107C59.3737 47.363 59.4093 47.1037 59.5292 46.8801C59.7092 46.5501 59.8792 46.2101 60.0392 45.8801C61.4273 42.9273 62.1412 39.7028 62.1292 36.4401C62.0458 30.8465 60.2135 25.4194 56.8892 20.9201C53.4513 16.1132 48.5938 12.5042 42.9992 10.6001C39.016 9.16457 34.8132 8.43365 30.5792 8.44006C22.8728 8.45262 15.3503 10.7951 8.99923 15.1601C5.99605 17.1146 3.24821 19.4358 0.819235 22.0701C0.765715 22.1245 0.70519 22.1716 0.639242 22.2101L0.379232 22.5401C0.322548 22.6432 0.255526 22.7404 0.17922 22.8301L0.109213 23.1001C0.0794812 23.2385 0.0794812 23.3816 0.109213 23.5201C0.131479 23.5917 0.158215 23.6618 0.18923 23.7301L0.299215 23.9201L0.459219 24.0901C0.512437 24.1421 0.573124 24.1859 0.639242 24.2201L0.869222 24.3301L1.08922 24.4001H1.29922C1.40538 24.4147 1.51306 24.4147 1.61922 24.4001L1.84923 24.3201L2.03924 24.2101L2.21923 24.0501C5.6815 20.4276 9.82828 17.5282 14.4192 15.5201C18.9511 13.4897 23.8535 12.4173 28.8192 12.3701C32.6159 12.3332 36.3788 13.0857 39.8692 14.5801C43.5026 16.1662 46.7047 18.5969 49.2092 21.6701C49.893 22.6212 50.5015 23.6242 51.0292 24.6701C51.1368 24.8949 51.1617 25.1505 51.0995 25.392C51.0374 25.6334 50.8921 25.8451 50.6892 25.9901C50.5149 26.1163 50.3045 26.183 50.0892 26.1801C49.9477 26.1796 49.8076 26.1511 49.6772 26.0962C49.5467 26.0413 49.4284 25.961 49.3292 25.8601C48.0113 24.5005 46.534 23.3051 44.9292 22.3001C41.0225 19.8938 36.5174 18.6358 31.9292 18.6701C26.8257 18.7072 21.8192 20.0683 17.3992 22.6201C12.6782 25.3303 8.73215 29.2074 5.93923 33.8801C2.76742 39.3457 1.11693 45.5609 1.15923 51.8801C1.16964 54.2494 1.37363 56.6139 1.76922 58.9501C3.27922 65.7701 5.25923 70.6401 8.24923 74.8201C8.36619 74.9747 8.51728 75.1003 8.69073 75.187C8.86417 75.2738 9.05531 75.3193 9.24923 75.3201C9.50642 75.3245 9.75842 75.2475 9.96923 75.1001C10.0945 75.0184 10.2023 74.9128 10.2864 74.7892C10.3705 74.6656 10.4292 74.5265 10.4592 74.3801C10.5084 74.0969 10.4437 73.8058 10.2792 73.5701C6.48867 67.7573 4.51162 60.949 4.59923 54.0101C4.59923 46.8601 6.59923 40.2001 10.2192 35.2601C12.0767 32.7035 14.4645 30.5784 17.2192 29.0301C19.9345 27.5537 22.9217 26.6452 25.9992 26.3601H26.0992C26.3286 26.3671 26.5496 26.4477 26.7297 26.5899C26.9097 26.7322 27.0393 26.9286 27.0992 27.1501C27.1714 27.3916 27.1497 27.6515 27.0384 27.8777C26.9272 28.1039 26.7346 28.2798 26.4992 28.3701C26.0692 28.5601 25.6492 28.7601 25.2292 28.9701C21.0796 31.1065 17.6375 34.3992 15.3192 38.4501C12.9842 42.4716 11.7559 47.0398 11.7592 51.6901C11.7769 55.2681 12.5398 58.8032 13.9992 62.0701C16.8553 68.7221 21.7599 74.2889 27.9992 77.9601C34.2424 81.6689 41.3776 83.6083 48.6392 83.5701C50.6472 83.567 52.6523 83.42 54.6392 83.1301C54.9354 83.0877 55.2041 82.9335 55.3901 82.6992C55.5761 82.4648 55.6653 82.1681 55.6392 81.8701C55.581 81.5681 55.4126 81.2986 55.1669 81.1138C54.9211 80.9291 54.6154 80.8422 54.3092 80.8701C53.1231 80.9911 51.9315 81.0512 50.7392 81.0501C42.8213 81.0654 35.1083 78.5342 28.7392 73.8301C25.7358 71.5944 23.2353 68.7531 21.3992 65.4901C19.5562 62.1464 18.5959 58.388 18.6092 54.5701C18.6115 53.7116 18.6583 52.8537 18.7492 52.0001C18.8183 51.4368 18.9252 50.8789 19.0692 50.3301C19.118 50.1026 19.2446 49.8993 19.4271 49.7551C19.6096 49.6109 19.8367 49.5349 20.0692 49.5401H20.1592C20.4244 49.5401 20.6788 49.6454 20.8663 49.833C21.0539 50.0205 21.1592 50.2748 21.1592 50.5401C21.3733 53.3495 22.0737 56.1004 23.2292 58.6701C25.2846 63.0985 28.7099 66.7483 32.9992 69.0801C37.4188 71.4605 42.3696 72.6818 47.3892 72.6301C55.6743 72.617 63.686 69.6653 69.9992 64.3001C77.1592 58.2301 81.6992 49.4501 83.1392 38.9001C83.1392 38.9001 83.1392 38.8001 83.1392 38.7401V38.5801C83.32 37.3603 83.4368 36.132 83.4892 34.9001C83.4791 34.5966 83.3534 34.3084 83.1377 34.0946C82.9221 33.8808 82.6328 33.7575 82.3292 33.7501Z"
                        fill="url(#paint0_linear_431_94)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_431_94"
                          x1="41.8092"
                          y1="0.0100586"
                          x2="41.8092"
                          y2="83.5701"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" stop-opacity="0.5"></stop>
                          <stop
                            offset="0.37"
                            stop-color="white"
                            stop-opacity="0.3"
                          ></stop>
                          <stop
                            offset="0.46"
                            stop-color="white"
                            stop-opacity="0.18"
                          ></stop>
                          <stop
                            offset="0.55"
                            stop-color="white"
                            stop-opacity="0.08"
                          ></stop>
                          <stop
                            offset="0.64"
                            stop-color="white"
                            stop-opacity="0.02"
                          ></stop>
                          <stop
                            offset="0.71"
                            stop-color="white"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="joinBtn">
                    <svg
                      viewBox="0 0 90 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          d="M88.1698 0.939941H43.3498C42.6318 0.939941 42.0498 1.52197 42.0498 2.23994V4.47994C42.0498 5.19791 42.6318 5.77994 43.3498 5.77994H88.1698C88.8878 5.77994 89.4698 5.19791 89.4698 4.47994V2.23994C89.4698 1.52197 88.8878 0.939941 88.1698 0.939941Z"
                          fill="white"
                        ></path>
                        <path
                          d="M37.7393 0.939941H10.7892C10.0713 0.939941 9.48926 1.52197 9.48926 2.23994V4.47994C9.48926 5.19791 10.0713 5.77994 10.7892 5.77994H37.7393C38.4572 5.77994 39.0392 5.19791 39.0392 4.47994V2.23994C39.0392 1.52197 38.4572 0.939941 37.7393 0.939941Z"
                          fill="white"
                        ></path>
                        <path
                          d="M5.44952 0.939941H1.31952C0.601549 0.939941 0.0195312 1.52197 0.0195312 2.23994V4.47994C0.0195312 5.19791 0.601549 5.77994 1.31952 5.77994H5.44952C6.16749 5.77994 6.74954 5.19791 6.74954 4.47994V2.23994C6.74954 1.52197 6.16749 0.939941 5.44952 0.939941Z"
                          fill="white"
                        ></path>
                        <g opacity="0.8">
                          <path
                            d="M88.1698 13.46H43.3498C42.6318 13.46 42.0498 14.042 42.0498 14.76V17C42.0498 17.7179 42.6318 18.3 43.3498 18.3H88.1698C88.8878 18.3 89.4698 17.7179 89.4698 17V14.76C89.4698 14.042 88.8878 13.46 88.1698 13.46Z"
                            fill="white"
                          ></path>
                          <path
                            d="M37.7393 13.46H10.7892C10.0713 13.46 9.48926 14.042 9.48926 14.76V17C9.48926 17.7179 10.0713 18.3 10.7892 18.3H37.7393C38.4572 18.3 39.0392 17.7179 39.0392 17V14.76C39.0392 14.042 38.4572 13.46 37.7393 13.46Z"
                            fill="white"
                          ></path>
                          <path
                            d="M5.44952 13.46H1.31952C0.601549 13.46 0.0195312 14.042 0.0195312 14.76V17C0.0195312 17.7179 0.601549 18.3 1.31952 18.3H5.44952C6.16749 18.3 6.74954 17.7179 6.74954 17V14.76C6.74954 14.042 6.16749 13.46 5.44952 13.46Z"
                            fill="white"
                          ></path>
                        </g>
                        <g opacity="0.6">
                          <path
                            d="M80.3398 25.98H43.3498C42.6318 25.98 42.0498 26.562 42.0498 27.28V29.52C42.0498 30.2379 42.6318 30.82 43.3498 30.82H80.3398C81.0578 30.82 81.6398 30.2379 81.6398 29.52V27.28C81.6398 26.562 81.0578 25.98 80.3398 25.98Z"
                            fill="white"
                          ></path>
                          <path
                            d="M37.7393 25.98H10.7892C10.0713 25.98 9.48926 26.562 9.48926 27.28V29.52C9.48926 30.2379 10.0713 30.82 10.7892 30.82H37.7393C38.4572 30.82 39.0392 30.2379 39.0392 29.52V27.28C39.0392 26.562 38.4572 25.98 37.7393 25.98Z"
                            fill="white"
                          ></path>
                          <path
                            d="M5.44952 25.98H1.31952C0.601549 25.98 0.0195312 26.562 0.0195312 27.28V29.52C0.0195312 30.2379 0.601549 30.82 1.31952 30.82H5.44952C6.16749 30.82 6.74954 30.2379 6.74954 29.52V27.28C6.74954 26.562 6.16749 25.98 5.44952 25.98Z"
                            fill="white"
                          ></path>
                        </g>
                        <g opacity="0.4">
                          <path
                            d="M72.2198 38.5098H43.3498C42.6318 38.5098 42.0498 39.0918 42.0498 39.8098V42.0498C42.0498 42.7677 42.6318 43.3498 43.3498 43.3498H72.2198C72.9378 43.3498 73.5198 42.7677 73.5198 42.0498V39.8098C73.5198 39.0918 72.9378 38.5098 72.2198 38.5098Z"
                            fill="white"
                          ></path>
                          <path
                            d="M37.7393 38.5098H10.7892C10.0713 38.5098 9.48926 39.0918 9.48926 39.8098V42.0498C9.48926 42.7677 10.0713 43.3498 10.7892 43.3498H37.7393C38.4572 43.3498 39.0392 42.7677 39.0392 42.0498V39.8098C39.0392 39.0918 38.4572 38.5098 37.7393 38.5098Z"
                            fill="white"
                          ></path>
                          <path
                            d="M5.44952 38.5098H1.31952C0.601549 38.5098 0.0195312 39.0918 0.0195312 39.8098V42.0498C0.0195312 42.7677 0.601549 43.3498 1.31952 43.3498H5.44952C6.16749 43.3498 6.74954 42.7677 6.74954 42.0498V39.8098C6.74954 39.0918 6.16749 38.5098 5.44952 38.5098Z"
                            fill="white"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
