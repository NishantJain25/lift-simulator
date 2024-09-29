import React from "react";
import "./Title.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";

const SocialBtn = ({ text, icon, link }) => {
  return (
    <a className="social-btn" href={link}>
      {icon} {text}
    </a>
  );
};

const Title = () => {
  const buttonList = [
    {
      text: "Nishant Jain",
      link: "https://nishantjain.netlify.app/",
      icon: <CiGlobe />,
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/nishantdjain/",
      icon: <BsLinkedin />,
    },
    {
      text: "Github",
      link: "https://github.com/NishantJain25",
      icon: <BsGithub />,
    },
    {
      text: "nishantjain2503@gmail.com",
      link: "mailto:nishantjain2503@gmail.com",
      icon: <MdMail />,
    },
    {
      text: "View CV",
      link: "https://drive.google.com/file/d/1zRlCLFG27MdemoYcKG_Q3Z93jkOXCng9/view?usp=sharing",
      icon: <MdMail />,
    },
  ];
  return (
    <header>
      <div className="center-column">
        <h1>Lift Simulator</h1>
        <p> By Nishant Jain</p>
      </div>
      <div className="row">
        <span> Connect with me on - </span>
        <div className="row">
          {buttonList.map(({ text, icon, link }) => (
            <SocialBtn text={text} icon={icon} link={link} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Title;
