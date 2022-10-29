import classes from "./CardContact.module.css";

const CardContact = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CardContact;
