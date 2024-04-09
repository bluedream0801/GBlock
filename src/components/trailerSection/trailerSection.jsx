import React from 'react'

export default function TrailerSection() {
  return (
    <div>
    <div className="home-trailer" id="trailer">
        <div className="trailer-section">
            <div className="patternBg1"></div>
            <div className="patternBg2"></div>
            <div className="gradientBg"></div>
            <div className="trailer-container">
                <div className="trailer-outer-bg">
                    <div className="videoContainer">
                        <div style={{ width: "640px", height: "360px" }} className="video">
                            <div data-vimeo-initialized="true" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                <iframe src="https://vimeo.com/162151880" width="426" height="240" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Gblock New Trailer 15.09" data-ready="true" style={{ width: "100%", height: "100%" }}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trailer-right-container">
                    <div className="trailer-desc">
                        <svg viewBox="0 0 180 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M179.057 88.4234C178.537 114.913 168.857 137.363 149.107 155.203C136.201 167.027 119.978 174.608 102.627 176.923C76.6275 180.503 53.1575 174.063 32.7475 157.423C16.2175 143.953 6.10741 126.483 1.82741 105.683C-0.272589 95.4934 -0.782575 85.1034 1.46743 74.9134C6.60743 51.5834 17.3674 31.5833 37.0974 17.2233C49.5743 8.02092 64.2517 2.26169 79.6574 0.523366C92.8274 -0.986634 105.547 0.913361 118.297 4.39336C129.197 7.39336 138.497 12.8433 147.007 19.8533C159.619 30.2623 169.048 44.0094 174.217 59.5234C177.472 68.8089 179.109 78.5841 179.057 88.4234ZM90.2174 166.713C92.9274 166.533 95.6474 166.443 98.3474 166.143C117.027 164.143 133.097 156.463 146.147 143.003C158.527 130.233 166.147 115.153 167.417 97.0634C168.417 83.1534 167.047 69.6634 161.147 56.9534C148.147 28.8834 125.957 13.4334 95.2575 10.5134C83.893 9.4003 72.4311 11.1645 61.9274 15.6434C32.0274 28.3534 15.4375 50.9534 12.6275 83.3934C11.5475 95.8234 13.9574 107.763 18.9174 119.163C28.2874 140.683 45.1275 154.163 66.3775 162.703C73.9075 165.713 82.0274 166.643 90.2174 166.713Z" fill="white"></path>
                            <path d="M137.817 112.353C134.817 114.613 131.537 116.493 127.567 116.443C126.298 116.409 125.089 115.892 124.187 114.999C123.284 114.105 122.755 112.902 122.707 111.633C122.567 106.633 122.407 101.723 122.387 96.7632C122.387 86.2932 122.387 75.8332 122.457 65.3732C122.384 63.5183 122.747 61.672 123.517 59.9832C125.254 57.0124 127.198 54.1685 129.337 51.4731C132.277 47.5731 135.337 43.7932 138.457 39.8732C137.128 40.6025 135.743 41.2277 134.317 41.7432C123.523 44.6829 113.673 50.3674 105.727 58.2432C105.524 58.4432 105.299 58.621 105.057 58.7732C100.337 55.9932 94.1772 56.9132 94.1772 56.9132C96.1641 58.6271 97.7364 60.7693 98.7756 63.1787C99.8149 65.5881 100.294 68.2019 100.177 70.8232C100.047 84.0132 100.177 97.2032 100.177 110.393C100.177 110.983 100.057 111.743 100.367 112.153C101.167 113.223 100.467 113.743 99.7673 114.153C97.3473 115.733 94.9672 117.423 92.4072 118.753C88.7972 120.633 85.2473 120.983 81.9573 117.753C80.2573 116.083 78.9573 114.523 78.9573 111.913C79.0473 94.4332 78.9573 76.9131 78.9573 59.4731C77.9573 60.6131 76.6073 61.4731 75.4673 60.4731C74.0315 59.2472 72.9506 57.6587 72.3373 55.8732C71.0773 51.3432 71.4773 46.7832 74.3373 42.9332C76.5073 40.0432 79.1273 37.5032 81.5773 34.8232L81.2073 34.9932C78.7373 36.1232 76.2073 37.1932 73.8273 38.4132C70.1573 40.2532 66.3972 41.9732 62.9272 44.1332C53.6572 49.9032 46.0573 57.5932 38.6473 65.5232C30.8273 73.9032 25.7673 83.7531 22.5573 94.5931C21.7473 97.3231 21.9873 100.373 21.7373 103.273L22.2972 103.373L22.8273 102.373C27.1662 94.0699 32.7096 86.4542 39.2773 79.7732C42.1973 76.7732 45.2773 73.9932 49.3473 72.5732C53.9073 70.9632 56.8673 73.1232 56.8773 77.9432C56.8773 84.0532 56.8773 90.1632 56.8773 96.2732C56.8773 103.353 56.8773 110.433 56.8773 117.513C56.8773 118.623 57.4573 119.773 57.2773 120.813C57.0699 121.804 56.5265 122.692 55.7393 123.328C54.952 123.964 53.9693 124.309 52.9573 124.303C51.5077 124.284 50.0612 124.167 48.6273 123.953C50.2873 126.753 55.4573 131.203 60.1973 133.953C68.0273 138.453 76.5373 140.953 85.3473 142.543C87.6173 142.953 89.6673 143.383 91.6073 140.993C94.9373 136.883 98.8073 133.223 102.497 129.333L114.697 139.643C128.627 131.173 138.397 119.133 145.947 105.163C143.287 107.573 140.707 110.163 137.817 112.353Z" fill="white"></path>
                        </svg>
                        <div className="trailer-desc-content">
                            <div className="trailer-desc-title">
                                UNREAL ENGINE 5.2
                            </div>
                            <div className="trailer-desc-item">
                                NANITE &amp; VIRTUAL SHADOW MAPS
                            </div>
                            <div className="trailer-desc-item">
                                PROCEDURAL CONTENT GENERATION
                            </div>
                            <div className="trailer-desc-item">
                                LUMEN &amp; HARDWARE RAY-TRACING
                            </div>
                            <div className="trailer-desc-item">
                                SUBSTRATE &amp; MORE
                            </div>
                        </div>
                    </div>
                    <div className="signupBtn-container">
                        <div className="signupBtnContainer">
                            <div className="signupBtn"><span>SIGN UP</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="decoration bottom" viewBox="0 0 1925 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1924.01 1.35014H1045.01C1018.82 1.32963 993.063 8.03732 970.21 20.8301L938.01 38.9201C915.153 51.713 889.393 58.4206 863.2 58.4001H829.33" stroke="url(#paint0_linear_1669_162202)" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M0.879883 1.35014H879.88C906.073 1.3297 931.833 8.03733 954.69 20.8301L986.91 38.9201C1009.76 51.713 1035.52 58.4207 1061.71 58.4001H1095.6" stroke="url(#paint1_linear_1669_162202)" strokeWidth="2" strokeMiterlimit="10"></path>
                <defs>
                    <linearGradient id="paint0_linear_1669_162202" x1="1924.02" y1="29.8701" x2="829.33" y2="29.8701" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"></stop>
                        <stop offset="0.01" stopColor="white" stopOpacity="0.03"></stop>
                        <stop offset="0.09" stopColor="white" stopOpacity="0.28"></stop>
                        <stop offset="0.17" stopColor="white" stopOpacity="0.5"></stop>
                        <stop offset="0.24" stopColor="white" stopOpacity="0.68"></stop>
                        <stop offset="0.31" stopColor="white" stopOpacity="0.82"></stop>
                        <stop offset="0.38" stopColor="white" stopOpacity="0.92"></stop>
                        <stop offset="0.44" stopColor="white" stopOpacity="0.98"></stop>
                        <stop offset="0.49" stopColor="white"></stop>
                        <stop offset="0.54" stopColor="white" stopOpacity="0.96"></stop>
                        <stop offset="0.61" stopColor="white" stopOpacity="0.85"></stop>
                        <stop offset="0.71" stopColor="white" stopOpacity="0.68"></stop>
                        <stop offset="0.82" stopColor="white" stopOpacity="0.43"></stop>
                        <stop offset="0.95" stopColor="white" stopOpacity="0.13"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1669_162202" x1="0.879883" y1="29.8701" x2="1095.57" y2="29.8701" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"></stop>
                        <stop offset="0.01" stopColor="white" stopOpacity="0.03"></stop>
                        <stop offset="0.09" stopColor="white" stopOpacity="0.28"></stop>
                        <stop offset="0.17" stopColor="white" stopOpacity="0.5"></stop>
                        <stop offset="0.24" stopColor="white" stopOpacity="0.68"></stop>
                        <stop offset="0.31" stopColor="white" stopOpacity="0.82"></stop>
                        <stop offset="0.38" stopColor="white" stopOpacity="0.92"></stop>
                        <stop offset="0.44" stopColor="white" stopOpacity="0.98"></stop>
                        <stop offset="0.49" stopColor="white"></stop>
                        <stop offset="0.54" stopColor="white" stopOpacity="0.96"></stop>
                        <stop offset="0.61" stopColor="white" stopOpacity="0.85"></stop>
                        <stop offset="0.71" stopColor="white" stopOpacity="0.68"></stop>
                        <stop offset="0.82" stopColor="white" stopOpacity="0.43"></stop>
                        <stop offset="0.95" stopColor="white" stopOpacity="0.13"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
</div>

  )
}
