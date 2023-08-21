import "./style.css";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Nav() {
  return (
    <div className="navigator">
      <SocialIcon
        url="https://www.linkedin.com/in/anabelenbernardez/"
        target="blank"
        rel="noopener noreferrer"
        title="My LinkedIn"
        className="socials"
        bgColor="#000000"
        style={{ height: 70, width: 70 }}
      />
      <SocialIcon
        url="https://github.com/AnaBelenBernardez"
        target="_blank"
        rel="noopener noreferrer"
        title="My GitHub"
        className="socials"
        bgColor="#000000"
        style={{ height: 70, width: 70 }}
      />
    </div>
  );
}

export default Nav;
