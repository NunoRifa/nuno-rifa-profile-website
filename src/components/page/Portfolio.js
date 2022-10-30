import shayna from "../../images/Project/nuno-rifa_shayna.png";
import giripermataindo from "../../images/Project/nuno-rifa_giripermataindo.jpg";
import cantikid from "../../images/Project/nuno-rifa_cantikid.png";
import onProgress from "../../images/Project/nuno-rifa_onporgress.png";

import classes from "./Portfolio.module.css";

import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";
import Tag from "../UI/Tag";

const Portfolio = () => {
  let projects = [
    {
      id: 1,
      name: "Shayna Online Shop",
      url: "https://nunorifa-shayna.herokuapp.com/",
      images: shayna,
      description:
        "Serves clothing purchases online and can make digital payments.",
      langguage: [
        {
          id: 1,
          name: "JavaScript",
        },
        {
          id: 2,
          name: "PHP",
        },
        {
          id: 3,
          name: "VueJS",
        },
        {
          id: 4,
          name: "Laravel",
        },
        {
          id: 5,
          name: "CSS",
        },
        {
          id: 6,
          name: "Bootstrap",
        },
        {
          id: 7,
          name: "MySQL",
        },
        {
          id: 8,
          name: "API",
        },
      ],
    },
    {
      id: 2,
      name: "PT. Giri Permata Indo",
      url: "https://giripermataindo.com/",
      images: giripermataindo,
      description:
        "Display company details or business profiles, to make it easier for people to get company-related information.",
      langguage: [
        {
          id: 1,
          name: "PHP MVC",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "Bootstrap",
        },
        {
          id: 4,
          name: "MySQL",
        },
      ],
    },
    {
      id: 3,
      name: "CantikID",
      url: "https://www.cantikid.com/",
      images: cantikid,
      description:
        "Serving barbershop orders, ordering beauty salons, ordering treatments, selling beauty products and online beauty consulting services with expert doctors.",
      langguage: [
        {
          id: 1,
          name: "JavaScript",
        },
        {
          id: 2,
          name: "Svelte",
        },
        {
          id: 3,
          name: "CSS",
        },
        {
          id: 4,
          name: "SASS",
        },
        {
          id: 5,
          name: "NodeJS",
        },
        {
          id: 6,
          name: "API",
        },
      ],
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
              <div className={classes["program-list"]}>
                {items.langguage.map((list) => (
                  <Tag key={list.id}>{list.name}</Tag>
                ))}
              </div>
              <span>{items.description}</span>
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
