import React from "react";
// import "./Header.module.css";
import Style from "./Header.module.css";

// tinder logo
// import TinderLogo from "../../assets/img/tinder_logo.jpeg";

// material-ui icon import
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const Header = () => {
  return (
    <div className={Style.header}>
      <IconButton>
        <PersonIcon fontSize="large" className={Style.header_logo} />
      </IconButton>

      <IconButton>
        <WhatshotIcon
          fontSize="large"
          className={Style.header_logo && Style.tinder_logo}
        />
      </IconButton>

      <IconButton>
        <ForumIcon fontSize="large" className={Style.header_logo} />
      </IconButton>
    </div>
  );
};

export default Header;
