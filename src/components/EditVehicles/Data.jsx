import styled from "@emotion/styled";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  Radio,
  Select,
  RadioGroup,
  TextField,
  FormControlLabel,
  Box,
  Tab,
  Tabs,
  MenuItem
} from "@mui/material";

function tabProps(index, tabName) {
  return {
    id: `${tabName}-tab-${index}`,
    "aria-controls": `${tabName}-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Data({ data }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [informationAciveTab, setInformationAciveTab] = useState(0);
  const [brand, setBrand] = useState(0);

  const handleBrandchange = (event) => {
    setBrand(event.target.value);
  };

  const handleInformationChange = (event, newValue) => {
    setInformationAciveTab(newValue);
  };

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${colors.contentBackground};
    border-radius: 8px;
    width: 100%;
  `;

  return (
    <Content>
      <form action="">
        <h2>Informações</h2>
        <Tabs value={informationAciveTab} onChange={handleInformationChange}>
          <Tab label="Dados do veículo" {...tabProps(0, "information")} />
          <Tab label="Preço médio" {...tabProps(1, "information")} />
        </Tabs>

        <TabPanel value={informationAciveTab} index={0}>
          <h3>Dados do veículo</h3>
          <RadioGroup
            aria-labelledby="condition"
            defaultValue="new"
            name="radio-buttons-group"
          >
            <FormControlLabel value="new" control={<Radio />} label="0 Km" />
            <FormControlLabel
              value="used"
              control={<Radio />}
              label="Seminovo"
            />
          </RadioGroup>
          <TextField
            id="Placa"
            label="Placa"
            variant="outlined"
            value={"testando"}
          />
          <TextField id="Renavam" label="Renavam" variant="outlined" />
          <Select
            labelId="select-brand"
            id="select-brand"
            value={brand}
            label="brand"
            onChange={handleBrandchange}
          >
            <MenuItem value={0}>Nissan</MenuItem>
            <MenuItem value={1}>Chevrolet</MenuItem>
            <MenuItem value={2}>Volkswagen</MenuItem>
          </Select>
        </TabPanel>

        <TabPanel value={informationAciveTab} index={1}>
          No informations here :c
        </TabPanel>

        <h3>Acessórios</h3>
        {data.acessorios.map((acessorio) => {
          return <p>{acessorio}</p>;
        })}

        <h3>Características</h3>
        {data.caracteristicas.map((acessorio) => {
          return <p>{acessorio}</p>;
        })}

        <h3>Localização</h3>
        <input type="text" />
        <input type="text" />

        <h3>Classificação</h3>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>

        <h3>Condição geral do veículo</h3>
        <span>Razoável</span>
        <span>Bom</span>
        <span>Excelente</span>

        <h3>Tags</h3>
        {data.tags.map((tag) => {
          return <p>{tag}</p>;
        })}

        <Tab></Tab>
        <input type="text" />
        <input type="text" />

        <div>
          <div>
            <p>Faixa de Preço do KBB</p>
            <span>
              {data.avaliacao.faixa_preco_min} -{" "}
              {data.avaliacao.faixa_preco_max}
            </span>
          </div>
          <div>
            <p>Faixa de Preço particular</p>
            <span>{data.avaliacao.faixa_preco_particular}</span>
          </div>
        </div>
      </form>
    </Content>
  );
}
