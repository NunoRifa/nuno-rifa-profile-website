import instagram from "../../images/nuno-rifa_instagram-fill.svg";
import github from "../../images/nuno-rifa_github-fill.svg";
import facebook from "../../images/nuno-rifa_facebook.svg";

import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={classes["social-media"]}>
      <a href="javascript:void(0)">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="javascript:void(0)">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="javascript:void(0)">
        <img src={github} alt="Github" />
      </a>
    </div>
  );
};

export default SocialMedia;
