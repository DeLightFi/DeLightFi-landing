import { Wrapper, Menu, NavLinks } from "./NavbarElements";
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
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
            <NavLinks
              to="about2"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About 2
            </NavLinks>
          </li>
        </ul>
        <a className="button" href="https://morphine.store/" target="_blank">
          Launch MVP
        </a>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
