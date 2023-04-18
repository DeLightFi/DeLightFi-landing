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
              Morphine
            </NavLinks>
            <NavLinks
              to="features"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Starken
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
        <>
          <a className="button" href="https://t.me/SachaEth" target="_blank">
            Docs
          </a>
          <a className="button" href="https://t.me/SachaEth" target="_blank">
            Contact
          </a>
        </>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
