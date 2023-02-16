import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Project from "./Project";
import { getInfoFromServer } from "../reducer/actions";

function Projects() {
  const projectData = useSelector((store) => store.project);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoFromServer("project"));
  }, []);

  const SCProjectDiv = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    background-color: white;
    padding-top: 5rem;
    box-sizing: box-border;
    padding-bottom: 2rem;
  `;

  const SCProjectHead = styled.h2`
    font-size: 2.25rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 2.25rem;
  `;

  const SCProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  return (
    <SCProjectDiv>
      <SCProjectHead>Projects</SCProjectHead>
      <SCProjects>
        {projectData.map((item) => (
          <Project data={item} />
        ))}
      </SCProjects>
    </SCProjectDiv>
  );
}

export default Projects;
