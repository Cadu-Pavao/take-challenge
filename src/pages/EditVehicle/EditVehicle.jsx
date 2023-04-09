import styled from "@emotion/styled";
import vehicles from '../../services/vehicles';
import { useQuery } from "react-query";
import Data from '../../components/EditVehicles/Data'

const fechedVehicle = async () => {
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
  const { data, status, isLoading } = useQuery("vehicle", fechedVehicle);

  return (
    <PageWrapper>
      <h2>Editar Veículo</h2>

      <Content>
        {isLoading && <p>Loading...</p>}
        {status === 'success' && <Data data={data}/>}
        {/* <Section>
          <Inspect/>
          <Gallery/>
          <Contact/>
        </Section> */}
      </Content>
      
    </PageWrapper>
  );
}
