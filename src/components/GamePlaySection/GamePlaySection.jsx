/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useEffect, useRef} from "react";
import galacticImage from "../../static/1-0d9db7233511ecfa762521f3b68086aa.png";
import mmorpgImage from "../../static/3-9dba6f6882de2630697cb1ae3b90263d.png";
import civilizationImage from "../../static/4-290440b1c11d2c895bbd475b38758f7f.png";
import diverceImage from "../../static/5-18269f09dc8dd82fc82dda05baeb8742.png";
import politicalImage from "../../static/6-523f2f6fd31d3f7006261f5f73a9becd.png";
import factionImage from "../../static/8-c0a904a02e120dd1277d75e2c6cc8b21.png";
import pvpImage from "../../static/9-54c390bfaa3ee99229231ff729142127.png";
import p2pImage from "../../static/10-52842de5ed06a158228700a26bd1f01e.png";
import gamePlayBackground from "../../static/604c1b302f2d78f6236da604060f1fc3/26222/gameplay_background.webp"
export default function GamePlaySection() {

  const sectionRefs = useRef([]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Change the threshold as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInFromBottom 4s ease forwards';
        } else {
          entry.target.style.animation = 'fadeOutToBottom .2s ease forwards';
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
      <div className="gamePlaySection">
        <div className="gamePlaySection__background">
          <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained gatsby-image-wrappers">
            <div style={{ maxWidth: "1920px", display: "block" }}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src="data:image/svg+xml;charset=utf-8,%3Csvg height='1920' width='1920' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
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
              style={{Opacity: 1}}
              sizes="(min-width: 1920px) 1920px, 100vw"
              decoding="async"
              loading="lazy"
              src={gamePlayBackground}
              alt="gameplay_background"
            />
          </div>
        </div>
        <div className="description">
          <div className="titleSection">
            <div className="outlined">GAMEPLAY</div>
            <div className="regular">GAMEPLAY</div>
          </div>
        </div>
        <div className="gamePlayColumn">
          <div className="featuresList">
            <div className="gamePlayInner" ref={el => sectionRefs.current[0] = el}>
              <div className="hideBorrder"></div>
              <div className="hideBorrder2"></div>
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={galacticImage}
                />
              </div>
              <div className="innerTitle">
                <span>A Galactic Metaverse on OmniX</span>
              </div>
              <div className="innerText">
                Explore the Verified Galaxy and interact with it in almost any
                way you want. The Metaverse is at your fingertips
              </div>
            </div>
            <div className="gamePlayInner" ref={el => sectionRefs.current[1] = el}>
              <div className="hideBorrder"></div>
              <div className="hideBorrder2"></div>
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src="data:image/png;base64,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"
                />
              </div>
              <div className="innerTitle">
                <span>Play to Earn Game Model</span>
              </div>
              <div className="innerText">
                Each time you play, earn native Cryptocurrency which can be used
                to vote for and change aspects of the metaverse, or hook
                yourself up with the coolest spaceships and weapons.
              </div>
            </div>
            <div className="gamePlayInner" ref={el => sectionRefs.current[2] = el}>
              <div className="hideBorrder"></div>
              <div className="hideBorrder2"></div>
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={mmorpgImage}
                />
              </div>
              <div className="innerTitle">
                <span>Strategy MMORPG on Unreal 5</span>
              </div>
              <div className="innerText">
                In blindingly good quality, strategize either by yourself or
                others on the best way to become the most feared warrior,
                businessman, pirate or builder in the galaxy.
              </div>
            </div>
            <div className="gamePlayInner" ref={el => sectionRefs.current[3] = el}>
              <div className="hideBorrder"></div>
              <div className="hideBorrder2"></div>
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={civilizationImage}
                />
              </div>
              <div className="innerTitle">
                <span>World Building with a Civilization Engine</span>
              </div>
              <div className="innerText">
                Starting from the nomadic age, you will design and build your
                civilization step by step. With each age there will be new
                possibilities to explore and dangers to overcome.
              </div>
            </div>
            <div className="gamePlayInner" ref={el => sectionRefs.current[4] = el}>
              <div className="hideBorrder"></div>
              <div className="hideBorrder2"></div>
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={diverceImage}
                />
              </div>
              <div className="innerTitle">
                <span>A Diverse Set Of Home-Worlds</span>
              </div>
              <div className="innerText">
                Over 122 unique World Subtypes to explore and call home. Each of
                these have unique features, NPC’s and planet life.
              </div>
            </div>
            <div className="gamePlayInner" ref={el => sectionRefs.current[5] = el}>
              <div className="hideBorrder"></div>
              <div className="hideBorrder2"></div>
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={politicalImage}
                />
              </div>
              <div className="innerTitle">
                <span>Interstellar Political Alliances</span>
              </div>
              <div className="innerText">
                Will you work with your galactic neighbors? The galactic senate
                is composed of all 10,000 planets in the solar system, who will
                decide the fate of the galaxy?
              </div>
            </div>
          </div>
        </div>

        <div className="gamePlayColumn2">
          <div className="gamePlayInner2 firstElement" ref={el => sectionRefs.current[6] = el}>
            <div className="hideBorrder"></div>
            <div className="hideBorrder2"></div>
            <div className="inner_container">
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACWjSURBVHhe7d0LeJxXfefxc96R5AQnMSSQlPsl4dZAiDVKjHE0VhPqJSnWyEndPsByKaGl2+2N0m2hhW0oBUovtFvaLQ20BdrSXQyxRg6YWxJpZGMca+QEmhAgUBrCJTSB2mkSW9K8p5Mzvxd0xhaaObrNSN/P87zP+TLIiW2N9Pfrk/d9rcGqMjAw0KX0jqYbXqv0ap/wq5WZZ2rNHNXqWWM/q/TSpPrHSm9ydM/nlOhAF/Xv2Kr0nEnfoPScNRcpM06r2MMKz5r0L5XeRHlkRIlVKNEKAEBLGCAAgCgMEABAFPZAOtx5l1++TulteGDd/1eKKyoWS6pV3G8ovEp55P8o0Yby/cXXKOuseY8qk9O6KJyxf6f0JssX/rxSrml4P6GTcAYCAIjCAAEARGGAAACisAfS4foKg3+m9Jyxv65cLuF1AanZrPIq+0oHlVgBF23Zfr7SS3PJLcpMcN3QkrP2HSqvMjb8O0p0IM5AAABRGCAAgCgMEABAFPZAOkxf/+AWpeesLSsz8/2h4G6tddYE97ZyzhSUXu0NcpWyOc79s8qrjI+8VIkVkC8U/1qZ+UWtzfqkVs8a92Gl54x9kzLzVK1zqWr1kmr6PKV3aP+e25ToAJyBAACiMEAAAFEYIACAKOyBdJh8ofgBZeYVWpvinP05pTc5Pvx+pbdp0+VnKL2ZdT1HlM36glavUi5doMQK6C0U9yu92hf8C5RNSavu8Urv8P6Rbym93v7B4PNrrb1V2aw3avVq75c/VKIDcAYCAIjCAAEARGGAAACiMEA6jXX/FhytStLu4Ggw3dP9lNmHXm7FfzQcWEnOPBgcLbK53IbZh17+IeseHRwtctbdN/vQy+gQDBAAQBQGCAAgCgMEABCF60A6zEWF4hOVXmrMV5SZ4BnpJ3Dmqyqv9gZ4g9JziQvvbeRscK+i+VhngmekT4yXgueVYHnlC8Xg81sTPI9jXtZ8SVXn3PUqsS9TZH5M61ymtXpp1QX7bI3XmaC9cQYCAIjCAAEARGGAAACisAfS4fr6i29Tes6a5X7G9F1avZ7pnmcpvQMHdj2kxAq4+LIdZym96nT6ZWXmTK3Lw9l3qbzK+PDrlehAnIEAAKIwQAAAURggAIAo7IF0uPPP39mj9E45a+oTysxPaF0SztifVXqT5eHgmdloL31bh16i9JxzH1IulTu0el3HpzYpvYMH9x5VogNxBgIAiMIAAQBEYYAAAKKwB7LKDAwMnKL07k83fEaZ2aI1jjXDKq8yVtqhRAfqLRQ/ovRq3xCuUsZxZlTl9cz0BP+8Awd2fU+JVYAzEABAFAYIACAKAwQAEIU9kFWur1C8Quk5Yz6mjJIm7iKld3h0ZELZETZv3hnc++l4z1RR6dnUPkfpWZsGf8hyNgnvJZUm4Z7Q+HXfVnaEjZfsCJ73kiTpLcootd+sYI/tULn0WSVWIc5AAABRGCAAgCgMEABAFPZAVrnnXvJTj1J6PUlXq/8dfvDxlXIpeL5Eu+srFF+h9Jwx71ZmztAa60GtnrP2dUpvcmz4WmVHyBeK31FmztE6l9pv6Q/1TPesV3o8D2Z14wwEABCFAQIAiMIAAQBEYQ9kjckXiseUmXVa5/J1rV6lXHqqsi1t7B+6TOkl1n1KmVnqPzQFewLGuuDnUxkbuUnZlmrvjy8pM8/QOpdgD6j2/gj2QLC6cQYCAIjCAAEARGGAAACisAeyxuQLxcZ7Nf2Y1rlMafVOqbpHK739+0fuV7aF2q+vrMz0a22KM25M6SXGBs+cd8ZsVjbHmorKq4yV+pRtYfPmnacqvanuqXuVmUdoncs9Wr1KuTTf+wmrCGcgAIAoDBAAQBQGCAAgCnsga0y+ULxdmXm21ia5Vym8SnnkA8oVkc//Qreybv09jfdeymmdy7e0eqcnR85Vevfff3r4h6z19gsqsU9TNKfLnqfyKjcOf1W5Imrvh5cqM/+ktTnWBNeNVMZKz1JiDeAMBAAQhQECAIjCAAEARGEPZI3pLRTfo/Rqb4DXKpvkvqbweqbXBc8QX+7nP5w/sPM0pXdKOtXidSn20wqvUh7epjypvv7i3yk9Z83PKZuSS5NnKr2b9+0On7G+xE5y3cfnlZlgj2Ze1rxf5VXGSi39fqCzcQYCAIjCAAEARGGAAACisAeyxmy8ZMfzlF6SpDcrM8G9n+bjjPkbpTdZLv2ickXkC8W7lJknap3Ld7XWJen5Kq9qcjNKL5e6Lyoz89z7yX5F4VXKw8EeSE34/JAlli8Mvk8p9mpFs6pa61KzReVV9pUOKrEGcAYCAIjCAAEARGGAAACisAeyxvVtHfotpeece6cyjrO/qvIq48PvVi6Lvv7i25Ses+Z3lM36vtZMqjVzlta5NOxp2BcpvEp5uPEZ7Usq3z/4RmWdtW9XRbHGvkXpTZSHr1FiDeIMBAAQhQECAIjCAAEARGEPBIG+QvEvlZ4z5n8qm9W4Z/ByrV6lXPqQckls2TJ4utI7lkuCZ5LXfkVPVywJZ82fKb3JsdJvKJdFvn/oV5R11v2FKo4z71V5lfFS473TlvU6FrQXzkAAAFEYIACAKAwQAEAU9kDQ4JrgDxW9/YeD5z1YG+5pNGFaq2etLSq9ibHhvcolsfHSK5+s9JKZalmZeZLWWIe1ekfWT21Wenfu3XtcuSTy/cXXKOusuVaVaelr3DnzD0pvcnxj8Az82vujcY8LaxhnIACAKAwQAEAUBggAIAp7IPiRBgYGupTe0XTD/1N6tTfQVcpmPaDVS525WOkdHi/drlwSGwcG+5RektrG56G0tmdg0suU3mR5z43KJXHRQPGFSi9NzSeVmdb+UGjNR1Te6fbIS5Te6Oho8DwUYDbOQAAAURggAIAoDBAAQBT2QNCS88/fGTwzfd1ZUzcpvdob6gXK5lh3q8o73R4N9iiW+u/g84Whxntl9Srm8q9avUq59DTlkrhg27b1Sq/72KlfVmYep7VZ+7V6x+7ruVTp3XbbriklMC/OQAAAURggAIAoDBAAQBT2QLAgFxWKT1R6qTFfUGY2aG2Ks2ZQ6U2OlfYol0S+MPg+pdirFXMJnmdSKZdeplwStZ/fK5Vig3uTNeGIVq8ryT1H6R0cve5uJdAyzkAAAFEYIACAKAwQAEAU9kCwqPJbB39fWefsm1VNscb9udKbKI+8Trkk+rYW/0jpOWf+l/LknH2XyquMD79euSTyheJfKTO/pLU5zgSfj8p46feUwIJxBgIAiMIAAQBEYYAAAKIwQLCobJpcP/vQyy2wjw2PpeWcPT770MtzctY9NPvQy0vGGnPW7EMvNy1J0utnH3oZWBQMEABAFAYIACAKAwQAEIUBgsWVsw8GR+se0XC0FWusm33o5SXjjE1mH3q5aTNp8sDsQy8Di4IBAgCIwgABAERhgAAAonAvLCxIPr893Kc4LfcmVZ1zb1Q1x5mvqryuqangGeUHD+49qlwU+cLQW5Xiwp//CewfKLxKebile321qvbz+7BS3E5FU5wxb1N666Z7gv994MCuJb+WBasXZyAAgCgMEABAFAYIACAKeyCr3MDAQJfSO+o2bFbWpe75Ks9a+zRlJnjmec2TtGbO05o5VetimdJa58w3VHWJ+Q9VHGcep8rMd/+tb2uts+ZbqqXhTOPn41FaYzXuedypNXOX1jrngv/tjPlXZV1iP6fyzrBHDii90dHRGSVWIc5AAABRGCAAgCgMEABAFPZAVpnewtDPKD1r3J8qM0/QCiyFcI/KuuCZ8ZWxkV1KrAKcgQAAojBAAABRGCAAgCjsgXS43q3FHUrPOvNRZYbPMVZS8MwU69Lg/ToxvqekRAfiDAQAEIUBAgCIwgABAETh78c7T/A5yxeGvqQU93QF0H6sCd6vlbHSs5WZJX/OPBYPZyAAgCgMEABAFAYIACAKeyAdJl8oPleZ+bzWZt2hNfN+rZ5z7ptKz5kkeP6FdeHzN3Im931lU6a7qqnSq85MH1FG6bKPCJ530uXS05XLoto1Hf4hbCbZoFoUOWtPU9bl0m5VlKpxwe9X7fO5wN8ve4WizplXqZqSVNPnKL1D+/fcpkQH4AwEABCFAQIAiMIAAQBEYQ+kw/QVhq5Wes649ymb48zPq7zKeKm1Hw/M0ts/9OtKz1r3Z8qmOGterfQmx0p/r0QH4AwEABCFAQIAiMIAAQBEYYB0mNS4p84+9HIL7L3hAawgZ84NDnQUBggAIAoDBAAQhQECAIjS8nUgmzfvPFPpTXdNn6f0qrk0uNdRz0PTX1Z6Bw/uPapEhHyh+AFl5hVam+KceZHSmxwvfVIJtGyh14HUfFCrVymXXqlEhAu2bVuv9NY9sO4pSs8ZO6P03LEf+5rSq1SunVY2hTMQAEAUBggAIAoDBAAQ5YQ9kIsuueppSs/Zmb9Ses6abcrMfEMo+Du32r/xepVXtfZ1Su+W0eGvK3ES+cLQp5TiflLRHOsuVXmVsZGblEDLFr4HYj+t8Crl4cbvL5jl4sL24Nqvqkn+VJn5Ka2ZHq1zOaY181GtXleSe4PSOzh63d1KjzMQAEAUBggAIAoDBAAQxV44MPRItZdL3ReUmSdoXSr3aPVSm+xQeofHdh9QoiZfKDZ+foJnSs8rSfpVXmV09z4l0LJFuA7kX7R6lXKp8Zn/a9rGrTs2K73EpbuVmXO0LpVvafW6ul2v0uMMBAAQhQECAIjCAAEARLH5wuCfqMW+XtGs72gVl1OIfYyiWVNaPevMjUrPWXOD0rPGfFfpOefuU3pJzh5X1lWT4F4vVef+U9kRbOKC/26+5lFam5Oa56u8yr7SQSXQskXYA/m+Vs+ltrXrmlZYztrTlHW5tFvlpVW3TulZa89Ses6Ys5Ve7fvdZUqv9v0uuG6rZr7rOho1fH82p2rNbNDaHGffpfI4AwEARGGAAACiMEAAAFFsfmvxDnWdM89UnZw1FZV37N6eFyi9U0451qWsW58Eexg1m7RiBSQ2vVjpHRrbc0gJtGwR9kCwuG7W6h27rye47iv3+CPBHk33sVMbvz8H3x9O4MxXVR5nIACAKAwQAEAUBggAIMrD14EE11HUXvrR121Y91aVVxkb+d/Kk+rtH/zvSs9a+w9KrAD2QLCY2ANpM9b8msqrjJX+QnlSte//b1KKDb6/n8RDWj3OQAAAURggAIAoDBAAQBSbLwwF13UYE97v/QQN14F0HZsK7tVy35kmuPfUhge7P6Ksc/bFKqwA9kCwmNgDaTPWXa/yeqbW/YzSmzp1+nHKuhn3GVXmKVpPzprbVB5nIACAKAwQAEAUBggAIIrNF4pvUGfeobVZD2jNVLVmztAaq/GfF/wdXO2XcK8iEzwPxJo0eN5Ap3PGXqHMtPTMevZAsJgWYQ/kbq2eNe7jylXBWXumss6Z4HkgNY/WmvlxrZmG5yu17JjWTOPzRFo6ibDGvkXpcQYCAIjCAAEARGGAAACi2M2bdwbPyJ3qnrpFmXmG1qUS7nE492aV1zOz7m+U3oEDu76nXJPyheInlZltWpvCHggW0yLsgXxKq1cpl/6bck2qfT8O9kyO90z9otKzzvy+MrPQPZL5fFGr13V86vlKjzMQAEAUBggAIAoDBAAQxWr9gedd+uLHK72uaq6krHMmr4r1Ha2etfbVSm9ibHivEifBHgjaCXsgy6u3vxj8/lhrPqTMhNedtKg2EG5Qes7lXq70KuPXfVvpcQYCAIjCAAEARGGAAACinLAHchLBx+T7B4N7MTlrNyu92gefrvSstRNKb2rdg9cpvc9/6lON99JaVBdftiO498xU1QU/v9z9Z39T6VUq104r29JC90Css5uU3sT48M1KoGVrbQ/k/PN3BveSWn/WsWDP2HR3HVV5N9+wO7g332I78bqR41cpvdrX+7nKOmfD77c5e5PKq4zu3qdsCmcgAIAoDBAAQBQGCAAgSjN7IG2tb+vQ5UrPOfc2ZWaj1rk8qNWz1gV7NNbZ31F6h8qlbyhXBHsgaCerbQ9k46VXPlnpJTPVtyszO7RmgnsJnshOKjxrzZuUXqdf98YZCAAgCgMEABCFAQIAiNJxeyC9hcGXKT1r7AeVmcUeisEz1a2zL1J6y72HwB4I2kmn74HkLykGXw+17x6fUGUeqXWxpFq92jfgn1N6E+VS4/eztsYZCAAgCgMEABCFAQIAiNL2eyAXbNu2Xul1Hzu18TqMR2ldLsG9box1r1F5lbGRjygzTuuiYA8E7aT990CuCf6Q3Fs4vFPp1b4BvleZCe6VtwyOaK3r6QmuQ6l8Zlf4/7cZzkAAAFEYIACAKAwQAECUtt8D6S0MXqn0rLEfVTZrv9Y6a76oqnPmharMU7TGCp4ZbKyrqOpcEjwfwJr0uLIpztjgeSw1T9DaFPZAsJgWYQ/kbq2eNe7jyqY4k6xT1tk0eP6PcTavyjxWayR7o0LSf1VIeJ1YTfi8kHlYa1+q9CbGhv9Z2ZY4AwEARGGAAACiMEAAAFHafw9kazF4Hod1pvF5H42C/2769OTIo5Xe6OjojNLbvHlncD//qe6pW5SZZ2hdFdgDwWJahD2Qdhfs0VTKpScpM8F1Xlu2DAbXkRzL2XDPdZ49EWvsW5TeRHn4GmVb4gwEABCFAQIAiMIAAQBEafsBYlPnZh96+Ufpmn18PzntnNnHwx8w28y6BzbMPmovdTccANauh/dIf3BcfNmOM2cfD3/AbMese9Tso/ZS8P2odszDTYdHe+MMBAAQhQECAIjCAAEARGn760D6+rcXlZ6zybCyWcEzzWtu15p5jtbMw/sgCxFcR1L7DQ7uxZVa8y2lZ52pKptkr1aIe7qiKS5JNyu9ydE9n1MCLVv4dSD2Kwpxf6uI4ow7RSn2uQqv9vV4uTLzCK3Nuldr5ktaMxdqzQTPM5qPs2ZQ6U2OlfYo2xJnIACAKAwQAEAUBggAIErb74Hk89vDv6Ncn9ypyizw/v4tC+4dZZ39FaW31PeWWugz0U2S9Ku8yujufUqgZe3/TPTQxi2Dj1N6SZcN/v3GmfNVy+Uurd7pyZFnKr3R0dFjyrbEGQgAIAoDBAAQhQECAIjS9nsgjfKFoYa/83clRabhvwNvWao188da6x44580qr1K5dlnvV7PQPZDEJQNK79D47jEl0LJO2wNptGngyicovZlqdVRZZ825qsXyn1o9m9jtSm9idDj897c5zkAAAFEYIACAKAwQAECUjtsDadS3ZTD476Zdzr5DmQnupVXTODTDZ6Bb9xsqrzI2cpOyLSx0D8SZ9DKlN1nec6MSaFmn74E0yr9wZ3AvPDd1vOHXZ3Yo65xtfEb6Ea2eMzb4+rJJNdhTrYzuuUPZkTgDAQBEYYAAAKIwQAAAUebdA9m8eefDzwL+genuqVcoPWfNC5WeS80jlV5i3b8ovWqae7/SO7xv963KJXHhwFDw81mXS9cpvYM3jNyj7AgL3QOx1gUfPzE28mkl0LLVtgfSaXoHBs9T1lXNz6vE9iq8xNqjSi91afA8oO6p6b9RegcP7g0+vhFnIACAKAwQAEAUBggAIMoJeyD5/u3B35nVZsx1ijprnqyKFd47ytnXq7zK+PC7lTiJhe+B2CuU3sTY8F4l0DL2QJZXX3/xdUrPWfNOZaZba6xwT9ilwfeLyvieSaXHGQgAIAoDBAAQhQECAIhiT7gffloN7w1lzFlal8s/afVSm/yV0jvv7K7gmeO7du2qKteEBd8LK02C5w9M7tt9vRJoGXsgC7Nz586c0vv6PVOblF7q3C8r66x9iWqZuH9XeLnu3LOVHmcgAIAoDBAAQBQGCAAgis33D/5fdZ21/0PVrNu1etaYbys9Z8ylysxCn0HS+Azy+7Rmvqe1zpqHVCfnwn+ec+Ezi9uNtWajMtPSHpV16ZDSmxjfU1ICLVuEPZDg67f29XdY2ZZqX3+nKevsPNddOBPcS7Cm8ev1TK2ZhV7H0ajxeSOP0ZppdY87uO6EMxAAQBQGCAAgCgMEABDF5vuLd6rrrDlXNZfg+R7mgXOCe2dVKtcGewr5/qE3K+us+30VVoAz7iqlN1keCe91BrRgEfZAsJicea/Kq4yXfkHpneT5TmWl54zpU56cNbepPM5AAABRGCAAgCgMEABAFJsvFBuvkzhF60lZY4J7U02US+G9WhpcNFAMnpmepoZncK8gZ+zPKr3J8vCHlUDL2ANpN/Y3FV6lPPynypOK2KMOnhfCGQgAIAoDBAAQhQECAIhi81uL4XUdzpyvmsu9Wj2XuJcrPZsmqVLcnysywf3ksbystS9VehNjw/+sBFrGHki7cV9TeDNdaUHpdR9Pgnt5ucR+TFk3z3WAtvYtQ+lxBgIAiMIAAQBEYYAAAKLYvkLxd9WeM+YPlCvlu1ozH9Ra59yoSlzw/JG0uzt4vsDM1PGjylWhJ+n6ojJzjtamOBfuWU2Oj/yjEmjZIuyBBNcVTKUzq2qPtKtn3RlKL5mebnj+hn2sos7aAZW4VyrENj7PY1lZa39b6XEGAgCIwgABAERhgAAAotgLtm1br/a6jz0iuD+8MS543scS+LzWujTdrvIq+/bcpURNvlBsfGb0hVqb5F6l8CrlkQ8ogZYtwh7ILVq9SrnU+Mz/NS1/yfYnKeuSZI8qc4HWpWFNReUdu7fnBUqPMxAAQBQGCAAgCgMEABDFav2BxmfmTnVP/Zoy8xKtmfnunfVVrWKD50+cUk3/SOnt3z9yvxIn0VsY/LjSs8ZermxK7eNfo/QmysN/qwRattA9EGfcXqU3WR65QomT2LTp8uC6kul1Pb+l9Grf0IN73dU8Vetc7tbqWWuCe+Otm3FvVXqN3585AwEARGGAAACiMEAAAFFO2ANBe8sXBt+nFHu1oinO2tcqvcmx4WuVQMsWfh2IC/bgKuWRYI8OC3PCnvbUseB7fqWy50FlFM5AAABRGCAAgCgMEABAFPZAOkxfYegapeeM+z1lc6z9JZVXGRv+ayXQsgVfB2JN8DyiybHS25XoAJyBAACiMEAAAFEYIACAKAyQDpO69M7Zh15umk3T3OxDLwMrIknT22YfehkdggECAIjCAAEARGGAAACicB1Ih8lfOnSusm7GtbQPUvuE36D0nDETSqBltfdTn9KrvZ8uU84l1erlupOzld7NN+y+T4kOwBkIACAKAwQAEIUBAgCIwh5Ih8sXigeVmYu1Am2ncQ9uolx6oRIdiDMQAEAUBggAIAoDBAAQhT2QDpe/pLhJWZeYUVXmFK3ASgiu+zDWBXselbGRm5ToQJyBAACiMEAAAFEYIACAKOyBrDL5/u29Ss+Z5J1Kz9oT7lXEewALcVyr54z5pNLLGRO8/w6VS59VYhXgDAQAEIUBAgCIwgABAETh77/XmIsv23GW0ktnXHDvLJea85SZp2iV9LGKOmsvVGWerXWxhM87seYWVZ2zThXJPUeRme/n/0WtYv9FEce68GvQmWepMo0/v4W6XWum8ffzO6q6JPz9T1Ib/Piuma6bld6BA7seUmIN4AwEABCFAQIAiMIAAQBEYQ8EiyrfX3yNss6a96qaFfydfKVcCq5rqVngnkcoXxh6q1LcmxRzsH+g8Crl4TcrF0vwNZkvFG9VZp6rtSnWuKuV3kR55O+UwIJxBgIAiMIAAQBEYYAAAKIwQLC4cum+4GiRM+au2Uf9peBY7YJfrzXm67OPhz+gJVWzPziARcQAAQBEYYAAAKIwQAAAURggWFTOJY+Zfejlpllj7p996OUl4/zNtH546OU5tfrxC5Va88DsQy83Le2yZ88+9DKwKBggAIAoDBAAQBQGCAAgCgMEi8o689LZh15uxTcajiVljTtl9qGX52SNPW32oZeXjHX2ntmHXm6aTd1LZh96GVgUDBAAQBQGCAAgCgMEABBlyf87dqxu+f7t4fM6bHJAlenR2pTEpsEz2g+N7TmkXBK9/cUPKj1rzcuVJ+WM+ajSmyyXflq5JPoKxSuUXu3f/zFls6a0eta45yu9ifLIYSXQMs5AAABRGCAAgCgMEABAFPZA0JKLL9txltKrTqUHlXXWnKtqkvuwwquUR35WuSzyheKXlJlnaJ1LcC3G087pebzS27VrV1W5KHbu3JlTel+7Z6rxmR6btDbrTq1ez3RP8OMPHNj1PSUwL85AAABRGCAAgCgMEABAFPZA8CNt2nT5GUpvet26zyg9a9xFymbdobWupye4LqHymV1HlEuirzA4qPScsSVllNqPD/ZsJsvDwZ7OYstfOhTuMc24m1WZM7U2K/jxXcenflLpHTy496gSOAFnIACAKAwQAEAUBggAIAp7IAhcsG3beqXXfezUvcpMv9bmOPNvKi+x4Y8/VC4t6TM/+vqHgntrOes+rcwEezwR7tLqTaUzFyq9L+z72PeVS2IJfn3jWuseSF+k8iqVPQ8qAc5AAABxGCAAgCgMEABAFPZA1rjNm3eeqvSmu6f2KD1nzGXKZn1Xq1c11UuU3i3l67+iXBIbtww+TuklOft5ZSa4l9eis+YjKq8yVtqpXBb5gR3B77dJ00+oMsEe13xq3yBuUHqnJUderPRGR0ePKbEGcQYCAIjCAAEARGGAAACisAeyxuULxQ8oM6/Q2qwHtHoutVuV3uS+4YpyWfQWiu9RerU3+GuVzQqeOe6cWaf0rDUvVDbFGvsapTdRHv5b5bLo2zoY3NvKOXu9MtPSM+trgmfIV8qlVyqxBnEGAgCIwgABAERhgAAAorAHssb0bi1uV3rWmRFlFGfNq5Xe5Fjp75XLJXgP5wvFf1dm5rvuI7iXlXngnPNU3pGzvxH8IWvDgz23KuuceaZqLsEz1Gv//CeqvErl2mnlsujrH/xlpeesfbcySu3zHzxfpfb5D64jwurGGQgAIAoDBAAQhQECAIjCHsga01cY+qjSc8ZdqWyKcyZ4JvrkeCm4zmC5NT6zfWZdT4vPVLfB8zMq5eFtypPKby2GezzOvErVlKSaPkfpHdq/5zblisj3F29S1lkzoGqKMyZ4P02WSz+txBrAGQgAIAoDBAAQhQECAIjCHsgak+8v3qmss+ZcVVNS44J7XR0uj5SVK2Lnzp05pfe1e6aCe3PVBPeyOon7tHozXdXnKb1TbDKj9GambeOeRUvPF6n985+g9G698fpvKldE38BQsOfhUhfuicwveD9VyqWnK7EGcAYCAIjCAAEARGGAAACisAeyxuQLg8Ezy2tvgcco5vJ9rd7TzukJPn7Xrl1VZVvoLRRLSq/2Bg/u1dSEh7RmUq2Zlp4p7ozbq/QmyyNXKNvENcEfIvOFw/cqM4/SOgcX3HusUh45W4k1gDMQAEAUBggAIAoDBAAQhT2QNSZfKB5TZn70dRLWBNc9VMZKwb2c2k1v/+AFSs9a+1llpqU9jAiNv78Xa/Uq5dIXlG2p9v64XZl5tta5BL/e2q/vVCXWAM5AAABRGCAAgCgMEABAFPZAVrkLB4YeqfRyqQuu62hC8PGVcqnx3k9Oa1vq6x/covScte9TZp6lNdbXtXrOpFcrvcnynhuV7Sr4HpAvFP9DmQmetzKfruNTG5TewYN7jyqxCnEGAgCIwgABAERhgAAAorAHssr1bR26XOk55z6ujGIT+xNKb2J0eFTZKYL3fF//0EVKLzXmx5VeYk3wvJHUui8rPfuf53xO6VUq104rO0Lf1sHgmfbO2U8po7jEBe+3ydGRTyixCnEGAgCIwgABAERhgAAAorAHssr0FnYE9y6yJr1OmVnYdQ/O7VN5lfHe4BnpxlzT+PwMtJGTPEM++HzWPF9rrDu0es4kVyq9yfLuLyqxCnAGAgCIwgABAERhgAAAorAH0uE2DVz5BKU3k1YPKzOP1roknHO/pfQmx0f+WIk21Ld1KPh81T5/71QukfCZ6TNd6Uald+uN139TiQ7EGQgAIAoDBAAQhQECAIjCHkiHy/cPfkhZZ+1LVMslfAZ4mj5T5VX27blLiRVw4cDQU5ReLnXBdRo1P/qZ+IsveL9WyqWXKdGBOAMBAERhgAAAojBAAABR2APpMH1bBoM9BpezjfcWmu9zerNWL6mmr1Z6Lkn+ROk5a16kbIp15u1Kb2K89LtKrIB8ofiHysxva23Wbq2ec+4apWet/Udl5rla5xI8Qz+XJsG92W7etzt43graG2cgAIAoDBAAQBQGCAAgCnsgHSZfGPw1pdg/VzTFOfdypTc5PhL8HXbvwOB5Ss+m9ivKZt2k1auUS5cqsQL6CsUxpeeMKSibUjXVZyi9W8rXB++HBT9z39lfVXmV8eF3K9EBOAMBAERhgAAAojBAAABRGCCdxppccLSo9gl/5OxDL/9ALrXHZx96uWnOuGT2oZexQlztHTP70MtNS2e6j8w+9PIPpe5ZwdEia1zX7EMvo0PwBQ4AiMIAAQBEYYAAAKJwHUiHyV+y/UnKuiS5XZVZr3UuD2jN/IPWOmsuUtU5k1c1K7j3UqVceqMSK6C3fzB45rm1Nngm+nycsYeUnnXuFmWdNa9QZeZ7vkjw/utKcsG+ycHR6+5WogNwBgIAiMIAAQBEYYAAAKKwB9Lh+grF1yo9Z8x7lMsluDYgrbofV3qH9498S4kV8LxLX/x4pdc1k2vcMztD67Jw1gbv18mx4WuV6ECcgQAAojBAAABRGCAAgCjsgawy+ULxN5WZd2jNLPR+Q0e1eklirlJ6h0ZLn1GiDfVtHfxJpeec/Ygys9A9kRmtddYFz2CvjI28S4lVgDMQAEAUBggAIAoDBAAQhT2QVa63sOPZSi8x1V9Qit2k8JxzVaVnE3tA6blq+pdKr7Jvz11KdKCNl175ZKWXzMz8ilLs8xVe7RtG8IfO1JrPKT1r0+C6jsronjuUWIU4AwEARGGAAACiMEAAABGM+S9AbNJLxJWcxAAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="innerInfo">
                <div className="innerText">
                  <div className="title">Technology, Resources and Assets</div>
                  <div className="description2">
                    Upgrade, Build, Collect. In both Phase I and II you will
                    have to constantly be progressing in order to earn tokens
                    and as well to not fall behind!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gamePlayInner2" ref={el => sectionRefs.current[7] = el}>
            <div className="hideBorrder"></div>
            <div className="hideBorrder2"></div>
            <div className="inner_container">
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={factionImage}
                />
              </div>
              <div className="innerInfo">
                <div className="innerText">
                  <div className="title">Galactic Factions and Senate</div>
                  <div className="description2">
                    Team play and alliances will be critical in ExoWorlds,
                    whether that&#x27;s in faction wars or galactic senate
                    parties, make sure to find the right allies that have your
                    back.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gamePlayInner2" ref={el => sectionRefs.current[8] = el}>
            <div className="hideBorrder"></div>
            <div className="hideBorrder2"></div>
            <div className="inner_container">
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={pvpImage}
                />
              </div>
              <div className="innerInfo">
                <div className="innerText">
                  <div className="title">PVP and PVE Interactions</div>
                  <div className="description2">
                    NPC’s will be a big part of ExoWorlds, for missions, combat
                    and quests. This includes cute, and fearsome companions. PVP
                    is enabled in many parts of the Galaxy, whether it be
                    friendly duels or deathmatches.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gamePlayInner2" ref={el => sectionRefs.current[9] = el}>
            <div className="hideBorrder"></div>
            <div className="hideBorrder2"></div>
            <div className="inner_container">
              <div className="innerImage">
                <img
                  alt="gamePlay"
                  src={p2pImage}
                />
              </div>
              <div className="innerInfo">
                <div className="innerText">
                  <div className="title">P2P Economy and Marketplaces</div>
                  <div className="description2">
                    Players will decide how the economy of the Verified Galaxy
                    is run. With player run shops, built on virtual land, that
                    can buy/sell anything in the metaverse, there will never be
                    a shortage of economic movement.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="button__accent button__more more_bottom"
        >
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
