import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Select, MenuItem, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { Bell, Home, Settings, LightMode, DarkMode } from "../../assets/Icons";
import Logo from "../../assets/Logo";
import AvatarImage from "../../assets/AvatarImage";
import { Link, useNavigate } from "react-router-dom";

const Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  max-height: 5vw;
  background-color: ${(props) => props.colors.contentBackground};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.colors.text};

  & fieldset {
    border: none;
  }
`;

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [location, setLocation] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const toHomePage = () => {
    navigate("/");
  };

  return (
    <Navbar colors={colors}>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <Home onClick={toHomePage} />
        <StyledSelect
          colors={colors}
          displayEmpty
          value={location}
          onChange={handleChange}
        >
          <MenuItem value={0}>Dryve - Ribeirão Preto</MenuItem>
          <MenuItem value={1}>Dryve - Araraquara</MenuItem>
          <MenuItem value={2}>Dryve - São Carlos</MenuItem>
        </StyledSelect>
      </Content>

      <Content>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
        </IconButton>
        <Bell />
        <Settings />
        <AvatarImage />
      </Content>
    </Navbar>
  );
}
