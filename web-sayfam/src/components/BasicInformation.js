import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function BasicInformation() {
  const keyInfo = useSelector((store) => store.basicInfoKey);
  const valueInfo = useSelector((store) => store.basicInfoValue);
  const SCBasicInfoDiv = styled.div`
    width: 500px;
    border-radius: 0.75rem;
    background-color: white;
    padding-top: 2.25rem;
    padding-left: 2.6rem;
    box-shadow: 0.25rem 0.5rem 0.4rem 0.5rem rgb(192, 192, 192);

    @media (max-width: 550px) {
      width: 80%;
    }

    @media (max-width: 1051px) {
      margin-bottom: 3rem;
    }
  `;

  const SCBasicHead = styled.h2`
    color: rgb(59 130 246);
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-style: italic;
  `;

  const SCInfoDetailDiv = styled.div`
    display: flex;
    align-items: stretch;
    margin-bottom: 2.25rem;
  `;
  const SCInfoKeyPar = styled.p`
    font-size: 1.125rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  `;

  const SCInfoKeyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const SCInfoValueDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const SCInfoValuePar = styled.p`
    font-size: 1.125rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 0.05em;
  `;

  return (
    <SCBasicInfoDiv>
      <SCBasicHead>Basic Information</SCBasicHead>
      <SCInfoDetailDiv>
        <SCInfoKeyDiv style={{ width: "45%" }}>
          {keyInfo.map((item) => (
            <SCInfoKeyPar>{item}</SCInfoKeyPar>
          ))}
        </SCInfoKeyDiv>
        <SCInfoValueDiv style={{ width: "45%" }}>
          {valueInfo.map((item) => (
            <SCInfoValuePar>{item}</SCInfoValuePar>
          ))}
        </SCInfoValueDiv>
      </SCInfoDetailDiv>
    </SCBasicInfoDiv>
  );
}

export default BasicInformation;
