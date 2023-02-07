import { Wrapper, Menu } from "./NavbarElements";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Menu>
        <ul>
          <li>
            <img src={Logo} width="40px" alt="title" />
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <button>Launch the App</button>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
