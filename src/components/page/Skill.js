import sveltejs from "../../images/Icon/svelte.svg";
import reactjs from "../../images/Icon/react.svg";
import js from "../../images/Icon/javascript.svg";
import nodejs from "../../images/Icon/nodejs.svg";
import mysql from "../../images/Icon/mysql.svg";
import sass from "../../images/Icon/sass.svg";
import css from "../../images/Icon/css.svg";
import git from "../../images/Icon/git.svg";

import classes from "./Skill.module.css";

import Card from "../UI/Card";
import Title from "../UI/Title";

const Skill = () => {
  let skill = [
    {
      id: 1,
      name: "ReactJS",
      icon: reactjs,
    },
    {
      id: 2,
      name: "SvelteJS",
      icon: sveltejs,
    },
    {
      id: 3,
      name: "NodeJS",
      icon: nodejs,
    },
    {
      id: 4,
      name: "JavaScript",
      icon: js,
    },
    {
      id: 5,
      name: "Sass",
      icon: sass,
    },
    {
      id: 6,
      name: "CSS",
      icon: css,
    },
    {
      id: 7,
      name: "MySQL",
      icon: mysql,
    },
    {
      id: 8,
      name: "Git",
      icon: git,
    },
  ];

  return (
    <section id="skills" className={classes.skill}>
      <Title sub="What are my Skills" title="Skills" />
      <div className={classes["skill-list"]}>
        {skill.map((list) => (
          <Card key={list.id}>
            <div className={classes.flex}>
              <div className={classes["list-icon"]}>
                <img src={list.icon} alt={list.name} />
              </div>
              <span>{list.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skill;
