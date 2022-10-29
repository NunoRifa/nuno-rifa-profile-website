import classes from "./Navbar.module.css";

const Navbar = () => {
  let navbarList = [
    {
      id: 1,
      name: "About",
      url: "#about",
    },
    {
      id: 2,
      name: "Skills",
      url: "#skills",
    },
    {
      id: 3,
      name: "Portfolio",
      url: "#portfolio",
    },
    {
      id: 4,
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <div className={classes.center}>
      <div className={classes.navbar}>
        <div className={classes.title}>Nuno.</div>
        <div className={classes.menu}>
          {navbarList.map((items) => (
            <a href="javascript:void(0)" key={items.id}>
              {items.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
