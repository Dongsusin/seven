import React, { useState } from "react";

import "./header.scss";

import { logo } from "../../assets/images";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header__inner contai">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button className="header__toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`header__nav ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="https://sena.netmarble.com/ko">사전등록</a>
            <a href="https://game.naver.com/lounge/sena_rebirth/home">라운지</a>
            <a href="https://www.youtube.com/@sena_rebirth">유튜브</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
