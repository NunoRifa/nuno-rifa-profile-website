import classes from "./Contact.module.css";

import Card from "../UI/Card";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <Card>
        <div className={classes.content}>
          <span>Have any project in mind ?</span>
          <a href="javascript:void(0)" className={classes.btn}>
            Contact me
          </a>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
