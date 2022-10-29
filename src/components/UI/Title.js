import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={classes.title}>
      <h3>{props.sub}</h3>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
