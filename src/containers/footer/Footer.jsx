import React from "react";
import "./footer.css";
import gpt3Logo from "../../logo.svg";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FcCallback } from "react-icons/fc";
import { SiFiverr } from "react-icons/si";
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>
            <AiOutlineMail color="#c820ce" /> atiqulislamrussell0@gmail.com
          </p>
          <p>
            <FcCallback /> +8801775481006
          </p>
          <p>
            <a
              href="https://github.com/atiqulislamwb"
              target="_blank"
              rel="oopener noreffer"
            >
              <AiFillGithub color="#c820ce" /> atiqulislamwb
            </a>
          </p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <a
          href="https://www.fiverr.com/atiqulislamwb"
          target="_blank"
          rel="oopener noreffer"
        >
          <p>
            {`@ ${date} All Rights Reserved`} <br />
            <a
              href="https://www.fiverr.com/atiqulislamwb?up_rollout=true"
              style={{ color: "#c820ce", fontSize: "15px", margin: "20px" }}
            >
              <span>
                <SiFiverr size={25} />
              </span>
              atiqulislamwb
            </a>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
