import styled from "@emotion/styled";
import vehicles from "../../services/vehicles";
import { useQuery } from "react-query";
import Data from "../../components/EditVehicles/Data";
import Inspect from "../../components/EditVehicles/Inspect";
import Gallery from "../../components/EditVehicles/Gallery";
import Contact from "../../components/EditVehicles/Contact";
import { Grid } from "@mui/material";

const fetchedVehicle = async () => {
  const response = await vehicles.getVehicleDetails();
  return response;
};

const PageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow: auto;
  padding: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function EditVehicle() {
  const { data, status, isLoading } = useQuery("vehicle", fetchedVehicle);

  return (
    <PageWrapper>
      <h2>Editar Veículo</h2>

      <Content>
        {isLoading && <p>Loading...</p>}

        {status === "success" && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Data data={data} />
            </Grid>
            <Grid item xs={6}>
              <Inspect />
              <Gallery photosGallery={data.fotos} />
              <Contact contacts={data.contatos} />
            </Grid>
          </Grid>
        )}
      </Content>
    </PageWrapper>
  );
}
