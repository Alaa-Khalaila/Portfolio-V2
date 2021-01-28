import React from "react";
import cv from "../media/resume.png";
import { Link, Router, Route } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <div className="container-md contact">
        <div className="row text-center">
          <div className="col-12">
            <h1>Contact me</h1>
            <h3>
              Here are diffrent ways to contact me, I'm availabe most of the
              time, just go ahead!
            </h3>
            <div className="icons ">
              <div class="row">
                <a
                  href="https://www.linkedin.com/in/alaa-khalila"
                  className="bg-info"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a href="https://github.com/Alaa-Khalaila" className="bg-dark">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.facebook.com/alaa.alkhlaila.12/"
                  className="bg-primary"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="alkhalila.alaa@gmail.com" className="bg-danger">
                  <i class="far fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="phone">
              <h4>Phone: (+962) 780071021</h4>
              <h4>Email: alkhalila.alaa@gmail.com</h4>
            </div>
            <a href="https://www.docdroid.net/F3fwG7O/alaa-khalila-v08-pdf"><img src={cv}></img></a>
          </div>
        </div>
      </div>
      <div className="copyright container-fluid bg-info">
        <h5>Created by @Alaa Khalila</h5>
        <h5>2021 All Rights Reserved</h5>
      </div>
    </div>
  );
};
