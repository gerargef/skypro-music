
import Burger from "./Burger";
import Menu from "./Menu";

function Nav() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
     <Burger/>
      <Menu/>
    </nav>
  );
}

export default Nav;
