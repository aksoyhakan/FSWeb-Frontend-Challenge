import React from "react";
import styled from "styled-components";

function Skill({ program }) {
  const SCSkillDiv = styled.div`
    width: 14rem;
    padding-bottom: 1rem;
    padding-right: 2.25rem;
    padding-left: 2.25rem;
    transition: all 0.1s ease-in-out;

    &:hover {
      padding-bottom: 0.5rem;
      padding-right: 2rem;
      padding-left: 2rem;
    }
  `;
  const SCSkillPhoto = styled.img`
    border-radius: 0.5rem;
    transition: all 0.1s ease-in-out;

    &:hover {
      width: 15rem;
    }
  `;

  const SCSkillExp = styled.p`
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    color: rgba(119, 119, 119, 1);
    font-weight: 500;
  `;

  return (
    <SCSkillDiv>
      <a href={program.page} target="_blank">
        <SCSkillPhoto src={program.url}></SCSkillPhoto>
        <SCSkillExp>{program.name}</SCSkillExp>
      </a>
    </SCSkillDiv>
  );
}

export default Skill;
