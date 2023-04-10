import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Modal, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";

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

const ImagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem auto;
`;

const Image = styled.img`
  width: 160px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
`;

const AddImageButton = styled(Button)`
  width: 160px;
  height: 120px;
  border: 1px dashed ${(props) => props.colors.divider};
  background-color: ${(props) => props.colors.blueBackground};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 50vw;
  height: 50vh;
  background-color: ${(props) => props.colors.contentBackground};
  margin: 10vw auto;
  border-radius: 8px;
  border: 1px solid ${(props) => props.colors.divider};
  padding: 2rem;

  & span {
    font-size: 3rem;
    font-weight: 600;
    color: ${(props) => props.colors.text};
  }
`;

export default function Gallery({ photosGallery }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <Content colors={colors}>
      <Title colors={colors}>Fotos do veículo</Title>
      <ImagesGrid>
        <AddImageButton onClick={handleModal} colors={colors}>
          Adicionar fotos
        </AddImageButton>
        <Modal
          open={isOpen}
          onClose={handleModal}
          aria-labelledby="add-new-image-modal"
        >
          <ModalContent colors={colors}>
            <span>Feature not available now, come back soon!</span>
            <Button variant="outlined" onClick={handleModal}>
              Close
            </Button>
          </ModalContent>
        </Modal>
        {photosGallery.map((photo, index) => (
          <Image key={index} src={photo} alt="" />
        ))}
      </ImagesGrid>
    </Content>
  );
}
