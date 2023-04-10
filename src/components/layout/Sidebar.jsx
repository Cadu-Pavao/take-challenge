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

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.isOpen ? "280px" : "100px")};
  height: 90vh;
  background-color: ${(props) => props.colors.contentBackground};
  padding: 1.5rem;
`;

const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  list-style: none;
  color: ${(props) => props.colors.text};
  font-size: 0.875rem;

  & path {
    stroke: ${(props) => props.colors.text};
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
  border-top: 1px solid ${(props) => props.colors.divider};
  margin: 1rem 0 0 0;
  padding: 1rem 0 0 0;
`;

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarIsOpen = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <StyledSidebar isOpen={isOpen} colors={colors}>
      <ListWrapper>
        <SidebarItem colors={colors}>
          <Summary /> {isOpen ? "Resumo" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <Tags /> {isOpen ? "Oportunidades" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <Calender /> {isOpen ? "Agenda" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <Car /> {isOpen ? "Veículos" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <Rocket /> {isOpen ? "Publicação" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <User /> {isOpen ? "Contatos" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <Chart /> {isOpen ? "Analytics" : ""}
        </SidebarItem>

        <SidebarItem colors={colors}>
          <Bank /> {isOpen ? "Financiamento" : ""}
        </SidebarItem>
      </ListWrapper>

      <ButtonWrapper colors={colors}>
        <IconButton onClick={handleSidebarIsOpen}>
          <SidebarIcon />
        </IconButton>
      </ButtonWrapper>
    </StyledSidebar>
  );
}
