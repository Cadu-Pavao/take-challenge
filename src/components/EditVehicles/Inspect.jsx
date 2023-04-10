import styled from "@emotion/styled";
import { ReactComponent as AvaliationLayers } from "../../assets/Photos/Layers.svg";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Inspect() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Content colors={colors}>
      <Title colors={colors}>Notas de inspeção</Title>

      <ImageWrapper>
        <AvaliationLayers />
      </ImageWrapper>
    </Content>
  );
}
