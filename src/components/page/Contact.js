import classes from "./Contact.module.css";

import CardContact from "../UI/CardContact";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <CardContact>
        <div className={classes.content}>
          <span>Have any project in mind ?</span>
          <a href="javascript:void(0)" className={classes.btn}>
            Contact me
          </a>
        </div>
      </CardContact>
    </section>
  );
};

export default Contact;
