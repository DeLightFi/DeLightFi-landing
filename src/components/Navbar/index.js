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
              offset={-60}
            >
              About
            </NavLinks>
            <NavLinks
              to="features"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Features
            </NavLinks>
            <NavLinks
              to="roadmap"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Roadmap
            </NavLinks>
            <NavLinks
              to="contribute"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Contribute
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
