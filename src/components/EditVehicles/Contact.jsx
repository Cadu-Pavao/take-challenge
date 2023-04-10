import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { abbreviateName } from "../../utils/nameReducer";

const Content = styled.div`
  width: 100%;
  background-color: ${(props) => props.colors.contentBackground};
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.colors.divider};
`;

const Title = styled.h3`
  margin: 0;
  padding-bottom: 1rem;
  color: ${(props) => props.colors.text};
  border-bottom: 1px solid ${(props) => props.colors.divider};
`;

const Overflow = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const ContactItem = styled.div`
  display: flex;
  padding: 1rem;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  margin: auto 1rem;
  background-color: ${(props) => props.colors.blueBackground};
  border: 2px solid ${(props) => props.colors.primary};
  border-radius: 50%;
  color: ${(props) => props.colors.primary};
  font-weight: 600;
  text-align: center;
  padding: 1rem;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 1rem;

  & span {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${(props) => props.colors.text};
    margin: 0;
  }

  & p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.colors.textSecondary};
    margin: 0;
  }
`;

export default function Contact({ contacts }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Content colors={colors}>
      <Title colors={colors}>Contatos vínculados</Title>
      <Overflow colors={colors}>
        {contacts.map((contact, index) => (
          <ContactItem key={index}>
            <Icon colors={colors}>{abbreviateName(contact.nome)}</Icon>
            <Data colors={colors}>
              <span>{contact.nome}</span>
              <p>{contact.email}</p>
              <p>{contact.telefone}</p>
            </Data>
          </ContactItem>
        ))}
      </Overflow>
    </Content>
  );
}
