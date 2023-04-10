import styled from "@emotion/styled";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import vehicles from "../../services/vehicles";
import { useQuery } from "react-query";
import { normalizeToPlate, normalizeNumber } from "../../utils/normalizes";
import { useNavigate } from "react-router-dom";

const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.colors.contentBackground};
  border: 1px solid ${(props) => props.colors.divider};
  border-radius: 8px;
  border-collapse: collapse;
`;

const Header = styled.thead`
  text-align: left;
  font-weight: 400;
  color: ${(props) => props.colors.textSecondary};
  border-bottom: 2px solid ${(props) => props.colors.divider};

  & th {
    padding: 1rem;
    text-align: center;

    &:first-of-type {
      text-align: left;
    }
  }
`;

const TableItem = styled.tr`
  font-weight: 600;
  color: ${(props) => props.colors.text};
  border-bottom: 1px solid ${(props) => props.colors.divider};

  & td {
    gap: 1rem;
    padding: 2rem 1rem;
    text-align: center;

    &:first-of-type {
      text-align: left;
    }
  }

  & img {
    width: 180px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.colors.background};
  }
`;

const DataWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const VehicleData = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.colors.text};
    margin: 0;
    padding: 0;
  }

  & p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.colors.text};
    margin: 0;
    padding: 0;
  }

  & b {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.colors.primary};
    margin: 0;
    padding: 0;
  }
`;

const fechedVehicles = async () => {
  const response = await vehicles.getVehicles();
  return response.data;
};

export default function VehiclesList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, status } = useQuery("vehicles", fechedVehicles);
  const navigate = useNavigate();

  const editComponentpage = () => {
    navigate("/edit-vehicle");
  };
  return (
    <Table colors={colors}>
      <Header colors={colors}>
        <tr>
          <th>Dados do veículo</th>
          <th>REF</th>
          <th>Placa</th>
          <th>Ano de Fabricação</th>
        </tr>
      </Header>
      <tbody>
        {status === "success" &&
          data.map((vehicle, index) => {
            return (
              <TableItem
                to="/edit-vehicle"
                colors={colors}
                key={index}
                onClick={editComponentpage}
              >
                <td>
                  <DataWrapper>
                    <img src={vehicle.image} alt="" />
                    <VehicleData colors={colors}>
                      <h2>
                        {vehicle.brand_name} {vehicle.model_name}
                      </h2>
                      <p>{vehicle.version_name}</p>
                      <p>
                        {vehicle.model_year} • {vehicle.fuel_type}
                      </p>
                      <p>
                        {vehicle.mileage} •{" "}
                        <b>R$ {normalizeNumber(vehicle.ad_selling_price)}</b>
                      </p>
                    </VehicleData>
                  </DataWrapper>
                </td>
                <td>{normalizeToPlate(vehicle.brand_uuid)}</td>
                <td>{normalizeToPlate(vehicle.model_uuid)}</td>
                <td>{vehicle.manufacturing_year}</td>
              </TableItem>
            );
          })}
      </tbody>
    </Table>
  );
}
