import styled from "@emotion/styled";
import { IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import {
  Bank,
  Calender,
  Car,
  Chart,
  Rocket,
  SidebarIcon,
  Summary,
  Tags,
  User,
} from "../../assets/Icons";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarIsOpen = () => {
    return setIsOpen(!isOpen);
  };

  const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${isOpen ? "280px" : "100px"};
    height: 90vh;
    background-color: ${colors.contentBackground};
    padding: 1.5rem;
  `;

  const SidebarItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    list-style: none;
    color: ${colors.text};
    font-size: 0.875rem;

    & path {
      stroke: ${colors.text};
    }
  `;

  const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid ${colors.divider};
    margin: 1rem 0 0 0;
    padding: 1rem 0 0 0;
  `;

  return (
    <StyledSidebar>
      <ListWrapper>
        <SidebarItem>
          <Summary /> {isOpen ? "Resumo" : ""}
        </SidebarItem>

        <SidebarItem>
          <Tags /> {isOpen ? "Oportunidades" : ""}
        </SidebarItem>

        <SidebarItem>
          <Calender /> {isOpen ? "Agenda" : ""}
        </SidebarItem>

        <SidebarItem>
          <Car /> {isOpen ? "Veículos" : ""}
        </SidebarItem>

        <SidebarItem>
          <Rocket /> {isOpen ? "Publicação" : ""}
        </SidebarItem>

        <SidebarItem>
          <User /> {isOpen ? "Contatos" : ""}
        </SidebarItem>

        <SidebarItem>
          <Chart /> {isOpen ? "Analytics" : ""}
        </SidebarItem>

        <SidebarItem>
          <Bank /> {isOpen ? "Financiamento" : ""}
        </SidebarItem>
      </ListWrapper>

      <ButtonWrapper>
        <IconButton onClick={handleSidebarIsOpen}>
          <SidebarIcon />
        </IconButton>
      </ButtonWrapper>
    </StyledSidebar>
  );
}
