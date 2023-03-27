import { useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Burger/BurgerMenu";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState();
  const isOpenMenuCallBack = (isMenuOpen) => {
    setMenuOpen(isMenuOpen);
  }
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
     <Burger isOpenMenuCallBack={isOpenMenuCallBack}/>
      {isMenuOpen ? <Menu/> : null}
    </nav>
  );
}

export default Nav;
