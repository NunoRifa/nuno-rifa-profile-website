import MediaQuery from "react-responsive";

import profile from "../../images/nuno-rifa_profile.jpg";

import classes from "./Hero.module.css";

import SocialMedia from "../UI/SocialMedia";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <>
      <MediaQuery maxWidth={425}></MediaQuery>
      <MediaQuery minWidth={1024}>
        <Navbar />
      </MediaQuery>
      <div className={classes.background} />
      <div className={classes.content}>
        <div className={classes.profile}>
          <img src={profile} alt="Profile" />
        </div>
        <h1>I'm Nuno Rigo Fadilah</h1>
        <h4>Front-End Development</h4>
        <SocialMedia />
      </div>
    </>
  );
};

export default Hero;
