import about from "../../images/nuno-rifa_about.png";

import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes["control-about"]}>
        <div className={classes.images}>
          <img src={about} alt="About" />
          <div className={classes["images-border"]} />
        </div>
        <div className={classes.content}>
          <h3>About me</h3>
          <h2>I'm Nuno Rigo Fadilah</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
