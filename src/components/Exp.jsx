import React from "react";
import html from "../media/html.png"
import css from "../media/css.png"
import js from "../media/js.png"
import boot from "../media/bootstrap.png"
import reactt from "../media/react.svg"
import node from "../media/node.png"
import mongo from "../media/mongo.png"
import mysql from "../media/mysql.png"


function Exp() {
  const skills = [html,css,js,reactt,boot,node,mysql,mongo]
  return (
    <div className="container-md exp">
      <div className="row text-center">
        <div className="col-12">
          <h2>Experience With</h2>
        </div>
        <div className="col-12">
            {skills.map(e=><img src={e}></img>)}
        </div>
      </div>
    </div>
  );
}

export default Exp;
