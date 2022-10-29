import instagram from "../../images/nuno-rifa_instagram-fill.svg";
import github from "../../images/nuno-rifa_github-fill.svg";
import facebook from "../../images/nuno-rifa_facebook.svg";

import classes from "./SocialMedia.module.css";

const SocialMedia = (props) => {
  let social = [
    {
      id: "1",
      name: "Instagram",
      url: instagram,
    },
    {
      id: "2",
      name: "Facebook",
      url: facebook,
    },
    {
      id: "3",
      name: "Github",
      url: github,
    },
  ];

  return (
    <div className={classes["social-media"]}>
      {social.map((list) => (
        <a href="javascript:void(0)" key={list.id}>
          <img src={list.url} alt={list.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
