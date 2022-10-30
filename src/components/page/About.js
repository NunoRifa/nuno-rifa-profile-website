import about from "../../images/nuno-rifa_about.png";
import Title from "../UI/Title";

import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes["control-about"]}>
        <div className={classes.images}>
          <img src={about} alt="About" />
        </div>
        <div className={classes.content}>
          <h3>About me</h3>
          <h2>I'm Nuno Rigo Fadilah</h2>
          <p>
            ​Hello! My name is Nuno and I am currently working as a Front End
            Website Developer at Solusi Kecantikan Digital Indonesia (CantikID).
            I graduated from High School in 2020 with LSP Certificate from BNSP
            (Badan Nasional Sertifikasi Profesi) and Fullstack Laravel & VueJS
            from online course (Build with Angga)
          </p>
          <p>
            I'm interested to Front End Develoer and i'm interested to explore
            and dedicated to developing software using modern Javascript
            technology. Below you can find my portfolio highlighting some of my
            game development work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
