import React from "react";
import { Link } from "react-router-dom";

function Header({ info }) {
  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="header__inner__logo">
          <Link to="/">webstoryboy</Link>
        </div>
        <div className="header__inner__menu">
          <Link to="#">
            <span className="sr-only">menu</span>
          </Link>
        </div>
      </div>
      <div className="header__nav demo">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reference">Reference</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/script">Script</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">게시판</Link>
          </li>
        </ul>
      </div>
      <div className="header__info" id={info}>
        <div>
          <h4>email</h4>
          <p>
            <Link to="mailto:rlawlstjr519@gmail.com">
              rlawlstjr519@gmail.com
            </Link>
          </p>
        </div>
        <div>
          <h4>kakao</h4>
          <p>
            <Link to="/">kjs0519</Link>
          </p>
        </div>
        <div>
          <h4>social</h4>
          <ul>
            <li>
              <Link to="/">Youtube</Link>
            </li>
            <li>
              <Link to="/">Instargram</Link>
            </li>
            <li>
              <Link to="/">Github</Link>
            </li>
            <li>
              <Link to="/">Cafe</Link>
            </li>
            <li>
              <Link to="/">Referecne</Link>
            </li>
            <li>
              <Link to="/">Tutorials</Link>
            </li>
            <li>
              <Link to="/">CSS</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
