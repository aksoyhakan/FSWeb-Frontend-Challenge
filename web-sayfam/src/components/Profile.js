import React from "react";
import styled from "styled-components";
import BasicInformation from "./BasicInformation";
import AboutMe from "./AboutMe";

function Profile() {
  const SCProfileDiv = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    background-color: rgba(244, 244, 244, 1);
    padding-top: 4.5rem;
    box-sizing: box-border;
    padding-bottom: 5rem;
    position: relative;
  `;

  const SCRectangleDiv = styled.div`
    background-color: rgb(192 192 192 / 0.3);
    width: 10rem;
    height: 20rem;
    position: absolute;
    right: 0rem;
    top: 10rem;
    border-radius: 20rem 0 0 20rem;

    @media (max-width: 850px) {
      display: none;
    }
  `;

  const SCProfileHead = styled.h2`
    font-size: 2.25rem;
    line-height: 2.75rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.25rem;
  `;

  const SCInfoDiv = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 1051px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  return (
    <SCProfileDiv>
      <SCProfileHead>Profile</SCProfileHead>
      <SCInfoDiv>
        <BasicInformation />
        <AboutMe />
      </SCInfoDiv>
      <SCRectangleDiv></SCRectangleDiv>
    </SCProfileDiv>
  );
}

export default Profile;
