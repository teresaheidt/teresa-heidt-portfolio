import React from "react";
import lightpink from "./lightpink.jpg";
import "./style.css";
import Typical from 'react-typical';

function Header(props) {
  return (
    <div style={{ backgroundImage: `url("${lightpink}")` }} >
    <div className="header text-center" >
      {props.children}
      Teresa Heidt
      <p className="occ">
        I'm a {' '}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'Web Designer 💻',
            1000,
            'Web Designer 🪄',
            1000,
            'Writer 📃',
            1000,
            'Dog Lover 🐕‍🦺'
          ]}
        />
      </p>
    </div>
    </div>
  );
}

export default Header;