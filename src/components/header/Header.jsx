import React from "react";

import "./header.scss";

import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner contai">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__nav">
          <li>
            <a href="https://sena.netmarble.com/ko">사전등록</a>
            <a href="https://game.naver.com/lounge/sena_rebirth/home">라운지</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
