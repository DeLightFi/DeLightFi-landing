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
              to="section"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Section
            </NavLinks>
          </li>
        </ul>
        <a className="button" href="https://morphine.store/" target="_blank">
          Launch the App
        </a>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
