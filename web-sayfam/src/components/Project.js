import React from "react";
import styled from "styled-components";

function Project({ data }) {
  const SCProjectDiv = styled.div`
    background-color: rgb(244, 244, 244, 1);
    border-radius: 0.75rem;
    width: 25rem;
    height: 42rem;
    padding-top: 2.875rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-bottom: 4rem;
    margin-right: 0.5rem;
    position: relative;

    @media (max-width: 425px) {
      height: 47rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: center;
    }
  `;

  const SCProjectHead = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: 0.05em;
    font-family: "Playfair Display";
    margin-bottom: 1.2rem;
    text-align: center;
  `;

  const SCProjectPar = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-style: normal;
    margin-bottom: 1.7rem;
  `;

  const SCTool = styled.p`
    width: 6rem;
    background-color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 5rem;
    text-align: center;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: rgb(59 130 246 / 0.5);
      color: rgb(0 76 153);
    }
  `;

  const SCTools = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 0.6rem;
    margin-bottom: 2.25rem;

    @media (max-width: 425px) {
      justify-content: center;
    }
  `;

  const SCGitHubDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const SCGitHubPar = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 2.5rem;
    font-style: normal;
    transition: all 0.2s ease-in-out;

    &:hover {
      font-size: 1.35rem;
    }
  `;

  const SCProjePhoto = styled.img`
    width: 100%;
    position: absolute;
    top: 30rem;
    left: 0rem;
    border-radius: 2rem;

    @media (max-width: 425px) {
      left: 0rem;
      top: 32rem;
    }
  `;

  return (
    <SCProjectDiv>
      <SCProjectHead>{data.name}</SCProjectHead>
      <SCProjectPar>{data.explanation}</SCProjectPar>
      <SCTools>
        {data.tools.map((item) => (
          <SCTool>{item}</SCTool>
        ))}
      </SCTools>
      <SCGitHubDiv>
        <a href={data.gitHubPage} target="_blank">
          <SCGitHubPar>View on GitHub</SCGitHubPar>
        </a>
        <a href={data.vercel} target="_blank">
          <SCGitHubPar>Go to app</SCGitHubPar>
        </a>
      </SCGitHubDiv>
      <SCProjePhoto src={data.url}></SCProjePhoto>
    </SCProjectDiv>
  );
}

export default Project;
