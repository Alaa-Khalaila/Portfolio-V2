import React from "react";
import portf from "../media/projects/portfoliov1.png";
import barakeh from "../media/projects/barakeh.png";
import interview from "../media/projects/interview.png";
import music from "../media/projects/music.png";
import grade from "../media/projects/grade.png";
import pink from "../media/projects/pink.png";

export const Portfolio = () => {
  const projects = [portf, barakeh, interview, music, grade, pink];
  return (
    <div className="container-fluid port-bgc">
      <div className="container-md port">
        <div className="row text-center">
          <div className="col-12">
            <h2>Portfolio</h2>
            <h4>Practice/Personal Projects</h4>
            <div className="projects">
              {projects.map((e) => (
                <img src={e}></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
