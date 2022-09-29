import React, { useEffect, useState } from "react";
//llama
import sr1 from "../../images/Llamaverse_Assets/sr1.png";
import sr1sm from "../../images/Llamaverse_Assets/sr1-sm.png";
import si1 from "../../images/Llamaverse_Assets/si1.png";
import si2 from "../../images/Llamaverse_Assets/si2.png";
import si3 from "../../images/Llamaverse_Assets/si3.png";

//wlping
import s1 from "../../images/WLP_Assets/s1.png";
import sl2 from "../../images/WLP_Assets/sl2.png";
import sl2sm from "../../images/WLP_Assets/sl2-sm.png";
import si4 from "../../images/WLP_Assets/si4.png";
import si5 from "../../images/WLP_Assets/si5.png";
import si6 from "../../images/WLP_Assets/si6.png";

//opsin
import s2 from "../../images/OP_Sin_Assets/s2.png";
import sr3 from "../../images/OP_Sin_Assets/sr3.png";
import sr3sm from "../../images/OP_Sin_Assets/sr3-sm.png";
import si7 from "../../images/OP_Sin_Assets/si7.png";
import si8 from "../../images/OP_Sin_Assets/si8.png";
import si9 from "../../images/OP_Sin_Assets/si9.png";

//nucyber
import s3 from "../../images/NuCyber_Assets/s3.png";
import sl4 from "../../images/NuCyber_Assets/sl4.png";
import sl4sm from "../../images/NuCyber_Assets/sl4-sm.png";
import si10 from "../../images/NuCyber_Assets/si10.png";
import si11 from "../../images/NuCyber_Assets/si11.png";
import si12 from "../../images/NuCyber_Assets/si12.png";

//gosutools
import s4 from "../../images/GoSU_Assets/s4.png";
import sr5 from "../../images/GoSU_Assets/sr5.png";
import sr5sm from "../../images/GoSU_Assets/sr5-sm.png";
import si13 from "../../images/GoSU_Assets/si13.png";
import si14 from "../../images/GoSU_Assets/si14.png";
import si15 from "../../images/GoSU_Assets/si15.png";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  function updatePredicate() {
    setIsMobile(window.innerWidth <= 575.98);
  }

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      console.log("resize");
      console.log(window.innerWidth <= 575.98);
      updatePredicate();
    });
  }, []);

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar"
      data-bs-offset="0"
      className="scrollspy"
      tabIndex="0"
    >
      <div id="llamaverse">
        <div className="row align-items-center section-info1">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 social-icons">
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si1}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si2}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si3}></img>
                </a>
              </div>
              <div className="col-sm-8 text-c">
                <p className="title">llamaverse</p>
                <h1 className="sub-title">Lorem ipsum dolor sit amet</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="section-buttons">
                  <button className="col section-btn-1 bg-pink">
                    Official Website
                  </button>
                  <button className="col section-btn-2 bg-purple">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 img-c">
            {isMobile ? (
              <img src={sr1sm} className="img-fluid section-img-sm"></img>
            ) : (
              <img src={sr1} className="img-fluid section-img"></img>
            )}
          </div>
        </div>
        <img className="trans1" src={s1}></img>
      </div>
      <div id="whitelistping">
        <div className="row align-items-center section-info2">
          {!isMobile && (
            <div className="col-sm-6 img-c">
              <img src={sl2} className="section-img"></img>
            </div>
          )}
          <div className="col-sm-6 wlpcol">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 social-icons">
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si4}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si5}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si6}></img>
                </a>
              </div>
              <div className="col-sm-8 text-c">
                <p className="title teal">wlp ping</p>
                <h1 className="sub-title teal">Lorem ipsum dolor sit amet</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="section-buttons">
                  <button className="col section-btn-1 bg-teal">
                    Official Website
                  </button>
                  <button className="col section-btn-2 bg-pink">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {isMobile && (
            <div className="col-sm-6">
              <img src={sl2sm} className="section-img"></img>
            </div>
          )}
        </div>
        <img className="trans2" src={s2}></img>
      </div>
      <div id="operationsin">
        <div className="row align-items-center section-info3">
          <div className="col-sm-6 opcol">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 social-icons">
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si7}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si8}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si9}></img>
                </a>
              </div>
              <div className="col-sm-8 text-c">
                <p className="title lightred">op. sin</p>
                <h1 className="sub-title lightred">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="description lightred">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="section-buttons">
                  <button className="col section-btn-1 bg-lightred">
                    Official Website
                  </button>
                  <button className="col section-btn-2 bg-red">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 img-c">
            {isMobile ? (
              <img src={sr3sm} className="img-fluid section-img"></img>
            ) : (
              <img src={sr3} className="img-fluid section-img"></img>
            )}
          </div>
        </div>
        <img className="trans3" src={s3}></img>
      </div>
      <div id="nucyber">
        <div className="row align-items-center section-info4">
          {!isMobile && (
            <div className="col-sm-6 img-c" style={{ zIndex: 10 }}>
              <img src={sl4} className="section-img"></img>
            </div>
          )}
          <div className="col-sm-6 nuccol">
            <div className="row mts-70">
              <div className="col-sm-3 col-md-3 col-lg-3 social-icons">
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si10}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si11}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si12}></img>
                </a>
              </div>
              <div className="col-sm-8 text-c">
                <p className="title lightpurple">nucyber</p>
                <h1 className="sub-title lightpurple">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="section-buttons">
                  <button className="col section-btn-1 bg-lightpurple">
                    Official Website
                  </button>
                  <button className="col section-btn-2 bg-darkpurple">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobile && (
          <div className="col-sm-6">
            <img src={sl4sm} className="section-img"></img>
          </div>
        )}
        <img className="trans4" src={s4}></img>
      </div>
      <div id="gosutools">
        <div className="row align-items-center section-info5">
          <div className="col-sm-6 gosucol">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 social-icons">
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si13}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si14}></img>
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <img className="social-img" src={si15}></img>
                </a>
              </div>
              <div className="col-sm-8 text-c">
                <p className="title green">gosu.tools</p>
                <h1 className="sub-title green">Lorem ipsum dolor sit amet</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="section-buttons">
                  <button className="col section-btn-1 bg-green">
                    Official Website
                  </button>
                  <button className="col section-btn-2 bg-darkgreen">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 img-c">
            {isMobile ? (
              <img src={sr5sm} className="img-fluid section-img"></img>
            ) : (
              <img src={sr5} className="img-fluid section-img"></img>
            )}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="footer-text">
                © 2021 LlamaLabs, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
