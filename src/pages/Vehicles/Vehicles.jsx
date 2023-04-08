import VehiclesList from "../../components/VehiclesList/VehiclesList";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow: auto;
  padding: 1.5rem;
`;

export default function Vehicles() {
  return (
    <PageWrapper>
      <VehiclesList></VehiclesList>
    </PageWrapper>
  );
}
