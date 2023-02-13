import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Foot() {
  const SCFoot = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 5.25rem;
    background-color: rgba(244, 244, 244, 1);
    padding-bottom: 2.5rem;
    position: relative;
  `;

  const SCFootContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
  `;

  const SCFootHead = styled.h2`
    font-size: 3rem;
    text-align: center;
    color: rgba(119, 119, 119, 1);
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 2.25rem;
    }
  `;

  const SCFootPara = styled.p`
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    color: black;
    font-weight: 400;
    margin-top: 1.5rem;

    @media (max-width: 500px) {
      font-size: 1.125rem;
    }
  `;

  const SCIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
  `;

  const SCRectangleDiv = styled.div`
    background-color: rgb(192 192 192 / 0.3);
    width: 20rem;
    height: 10rem;
    position: absolute;
    left: 0rem;
    top: 0rem;
    border-radius: 0 0 20rem 20rem;

    @media (max-width: 500px) {
      display: none;
    }
  `;

  const SCRectangleDiv2 = styled.div`
    background-color: rgb(100 100 100 / 0.3);
    width: 10rem;
    height: 20rem;
    position: absolute;
    right: 0rem;
    top: 6rem;
    border-radius: 20rem 0 0 20rem;

    @media (max-width: 500px) {
      display: none;
    }
  `;

  const footInfo = useSelector((store) => store.foot);

  return (
    <SCFoot>
      <SCRectangleDiv></SCRectangleDiv>
      <SCRectangleDiv2></SCRectangleDiv2>
      <SCFootContainer>
        <SCFootHead>
          <Link to="/contact">{footInfo.header}</Link>
        </SCFootHead>
        <SCFootPara>{footInfo.paragraph}</SCFootPara>
        <SCFootPara>
          <Link to="/contact">{footInfo.email}</Link>
        </SCFootPara>
        <SCIcon>
          <a
            href="https://github.com/aksoyhakan?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon
              style={{
                width: "31px",
                height: "34px",
                marginRight: "2rem",
                display: "block",
                color: "rgba(119, 119, 119, 1)",
              }}
              icon={faGithub}
            />
          </a>
          <a
            href="https://tr.linkedin.com/in/hakan-aksoy-102727222"
            target="_blank"
          >
            <FontAwesomeIcon
              style={{
                width: "34px",
                height: "36px",
                display: "block",
                marginRight: "2rem",
                color: "rgba(119, 119, 119, 1)",
              }}
              icon={faLinkedinIn}
            />
          </a>
          <a>
            <FontAwesomeIcon
              style={{
                width: "31px",
                height: "34px",
                display: "block",
                color: "rgba(119, 119, 119, 1)",
              }}
              icon={faInstagram}
            />
          </a>
        </SCIcon>
      </SCFootContainer>
    </SCFoot>
  );
}

export default Foot;
