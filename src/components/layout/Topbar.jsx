import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Select, MenuItem, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { Bell, Home, Settings, LightMode, DarkMode } from "../../assets/Icons";
import Logo from "../../assets/Logo";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [location, setLocation] = useState(0);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const Navbar = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    max-height: 5vw;
    background-color: ${colors.contentBackground};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
    z-index: 1;
  `;

  const Content = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
  `;

  const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
  `;

  const StyledSelect = styled(Select)`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${colors.text};

    & fieldset {
      border: none;
    }
  `;

  return (
    <Navbar>
      <Content>
        <Logo />
        <Home />
        <StyledSelect displayEmpty value={location} onChange={handleChange}>
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
        <Avatar />
      </Content>
    </Navbar>
  );
}
