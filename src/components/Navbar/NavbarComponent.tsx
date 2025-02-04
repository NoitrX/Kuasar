import React, { useState } from "react";
import {
  Button,
  Flex,
  Navbar,
  PlainText,
  PrimaryText,
  HamburgerIcon,
  MobileMenu,
} from "../StyledComponents";

interface NavbarProps {
  handleLogout: () => Promise<void>;
}

const NavbarComponent: React.FC<NavbarProps> = ({ handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <Flex gap="32px">
        <div>
          <PrimaryText weight="700">NatifoAI</PrimaryText>{" "}
        </div>
      </Flex>

      <div className="desktop-only">
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      <HamburgerIcon onClick={toggleMenu}>
        <div className={isMenuOpen ? "bar open" : "bar"} />
        <div className={isMenuOpen ? "bar open" : "bar"} />
        <div className={isMenuOpen ? "bar open" : "bar"} />
      </HamburgerIcon>

      <MobileMenu isOpen={isMenuOpen}>
        <PlainText>Home</PlainText>
        <Button onClick={handleLogout}>Logout</Button>
      </MobileMenu>
    </Navbar>
  );
};

export default NavbarComponent;
