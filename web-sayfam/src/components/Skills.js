import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skill from "./Skill";
import styled from "styled-components";
import { getInfoFromServer } from "../reducer/actions";

function Skills() {
  const programInfo = useSelector((store) => store.programs);

  const SCSkillsDiv = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 5rem;
    padding-bottom: 8.15rem;
    position: relative;
  `;

  const SCSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3.5rem;
    justify-content: center;
  `;

  const SCSkillHead = styled.h2`
    font-size: 3rem;
    text-align: center;
    font-weight: 500;
  `;

  const SCGrayCircle = styled.div`
    position: absolute;
    left: 0rem;
    top: 4rem;
    height: 8rem;
    width: 4rem;
    border-radius: 0rem 4rem 4rem 0rem;
    background-color: rgb(192 192 192 / 0.5);
  `;

  const SCWhiteCircle = styled.div`
    position: absolute;
    left: 0rem;
    top: 5rem;
    height: 6rem;
    width: 3rem;
    border-radius: 0rem 3rem 3rem 0rem;
    background-color: white;
  `;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoFromServer("programs"));
  }, []);

  return (
    <SCSkillsDiv>
      <SCGrayCircle />
      <SCWhiteCircle />
      <SCSkillHead>Skills</SCSkillHead>
      <SCSkills>
        {programInfo.map((item) => (
          <Skill program={item} />
        ))}
      </SCSkills>
    </SCSkillsDiv>
  );
}

export default Skills;
