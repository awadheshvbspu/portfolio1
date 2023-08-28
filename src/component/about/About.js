import React from "react";
import Aboutimg from "../../assets/IMG_7535-01.jpeg";
import CV from "../../assets/Resume.pdf";
import Info from "./Info";
import {FaFileDownload} from 'react-icons/fa';
import './about.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={Aboutimg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have three months of experience and many clients are happy with the
            projects carried out.
          </p>
          <a href={CV} className="button button--flex">
            Download CV
            <FaFileDownload color="white"/>
          </a>
        </div>
      </div>
    </section>
  );
}
