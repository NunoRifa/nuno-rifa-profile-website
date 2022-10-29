import shayna from "../../images/Project/nuno-rifa_shayna.png";
import giripermataindo from "../../images/Project/nuno-rifa_giripermataindo.jpg";
import cantikid from "../../images/Project/nuno-rifa_cantikid.png";
import onProgress from "../../images/Project/nuno-rifa_onporgress.png";

import classes from "./Portfolio.module.css";

import Title from "../UI/Title";
import ProjectCard from "../UI/ProjectCard";

const Portfolio = () => {
  let projects = [
    {
      id: 1,
      name: "Shayna Online Shop",
      url: "https://nunorifa-shayna.herokuapp.com/",
      images: shayna,
    },
    {
      id: 2,
      name: "PT. Giri Permata Indo",
      url: "https://giripermataindo.com/",
      images: giripermataindo,
    },
    {
      id: 3,
      name: "CantikID",
      url: "https://www.cantikid.com/",
      images: cantikid,
    },
  ];

  return (
    <section id="portfolio" className={classes.portfolio}>
      <Title sub="Portfolio" title="Latest Projects" />
      <div className={classes.content}>
        {projects.map((items) => (
          <ProjectCard>
            <div className={classes.images}>
              <img src={items.images} alt={items.name} />
            </div>
            <div className={classes["content-images"]}>
              <div className={classes.name}>{items.name}</div>
              <a href={items.url} target="_blank" className={classes.btn}>
                View Website
              </a>
            </div>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
