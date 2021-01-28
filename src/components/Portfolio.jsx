import React from "react";
import portf from "../media/projects/portfoliov1.png";
import barakeh from "../media/projects/barakeh.png";
import interview from "../media/projects/interview.png";
import music from "../media/projects/music.png";
import grade from "../media/projects/grade.png";
import pink from "../media/projects/pink.png";

export const Portfolio = () => {
  const projects = [
    { pic: portf, link: "https://alaa-portfolio.netlify.app/" },
    {
      pic: barakeh,
      link:
        "https://www.youtube.com/watch?v=cEMjU3j_yIU&t=22s&ab_channel=AlaaKhalila",
    },
    { pic: interview, link: "https://interview-questions112.netlify.app/" },
    { pic: music, link: "https://sherine-song.netlify.app/" },
    {
      pic: grade,
      link:
        "https://www.youtube.com/watch?v=_0jGAJ8f-IM&t=18s&ab_channel=AlaaKhalila",
    },
    { pic: pink, link: "https://pink-web.netlify.app/" },
  ];
  return (
    <div className="container-fluid port-bgc">
      <div className="container-md port">
        <div className="row text-center">
          <div className="col-12">
            <h2>Portfolio</h2>
            <h4>Practice/Personal Projects</h4>
            <div className="projects">
              {projects.map((e) => (
                <a href={e.link}>
                  <img src={e.pic}></img>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
