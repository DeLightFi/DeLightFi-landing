import { Wrapper, Menu } from "./NavbarElements";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Menu>
        <li>
          <img src={Logo} width="40px" alt="title" />
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <button>Launch the App</button>
        </li>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
