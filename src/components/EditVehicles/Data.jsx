import styled from "@emotion/styled";
import { tokens } from "../../theme";
import { useState } from "react";
import { normalizeNumber } from "../../utils/normalizes";

import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  Snackbar,
} from "@mui/material";

import {
  accessories,
  bodyworks,
  brands,
  carColors,
  characteristics,
  classification,
  conditions,
  fuelType,
  locations,
  shiftType,
  tags,
} from "../../mocks/brands";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.colors.contentBackground};
  border-radius: 8px;
  border: 1px solid ${(props) => props.colors.divider};
`;

const Title = styled.h3`
  margin: 0;
  padding-bottom: 1rem;
  color: ${(props) => props.colors.text};
  border-bottom: 1px solid ${(props) => props.colors.divider};
`;

const Subtitle = styled.h3`
  color: ${(props) => props.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem 0;
`;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  margin: 1rem 0;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  gap: 0.5rem;
`;

const StyledToggleButton = styled(ToggleButton)`
  padding: 0.5rem 2rem;
  border-radius: 2rem !important;
  border: none;
  background-color: ${(props) => props.colors.greyBackground};
`;

const StyledChip = styled(Chip)`
  color: ${(props) => props.colors.text};
  border: 1px solid ${(props) => props.colors.textDisabled};
  padding: 0.5rem;
  margin: 0 0.5rem 1.5rem 0;
  border-radius: 4px;
`;

const PriceRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${(props) => props.colors.divider};
  border-radius: 8px;
`;

const PriceRangeTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  background-color: ${(props) => props.colors.secondary};
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid ${(props) => props.colors.divider};
  color: ${(props) => props.colors.white};
  font-weight: 400;
  text-align: center;
  padding: 1rem;

  & p {
    margin: 0;
  }

  & span {
    font-weight: 600;
  }
`;

const PriceRangeBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  border-radius: 0 0 8px 8px;
  border-bottom: 1px solid ${(props) => props.colors.divider};
  color: ${(props) => props.colors.text};
  font-weight: 400;
  text-align: center;
  padding: 1rem;

  & p {
    margin: 0;
  }

  & span {
    font-weight: 600;
  }
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid ${(props) => props.colors.divider};
`;

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
  const [avaliationActiveTab, setAvaliationActiveTab] = useState(0);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const [form, setForm] = useState({
    seminovo: data.dados.seminovo,
    brand: data.dados.marca,
    placa: data.dados.placa,
    renavam: data.dados.renavam,
    version: data.dados.versao,
    km: data.dados.quilometragem,
    model: data.dados.modelo,
    bodywork: data.dados.carroceria,
    fuel: data.dados.combustivel,
    shift: data.dados.cambio,
    state: data.localizacao.estado,
    city: data.localizacao.cidade,
    carColor: data.dados.cor,
    rate: data.classificacao,
    condition: data.condicao,
    maxPrice: data.avaliacao.preco_max,
    minPrice: data.avaliacao.preco_min,
    accessories: data.acessorios,
    characteristics: data.caracteristicas,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
    });
  };

  const handleAccessoriesChange = (event, newValue) => {
    setForm({ ...form, accessories: newValue });
  };
  const handleCharacteristcsChange = (event, newValue) => {
    setForm({ ...form, characteristics: newValue });
  };

  const handleInformationChange = (event, newValue) => {
    setInformationAciveTab(newValue);
  };

  const handleAvaliationTabChange = (event, newValue) => {
    setAvaliationActiveTab(newValue);
  };

  const handleSubmit = () => {
    setAlertIsOpen(true);
    console.log("enviando formulário:", form);
  };

  return (
    <Content colors={colors}>
      <Snackbar
        open={alertIsOpen}
        message="Alterações salvas com sucesso! ~cheque o console :)~"
        autoHideDuration={4000}
        onClose={() => setAlertIsOpen(false)}
      />
      <form>
        <Title colors={colors}>Informações</Title>
        <Tabs value={informationAciveTab} onChange={handleInformationChange}>
          <Tab label="Dados do veículo" {...tabProps(0, "information")} />
          <Tab label="Preço médio" {...tabProps(1, "information")} />
        </Tabs>

        <TabPanel value={informationAciveTab} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledRadioGroup
                aria-labelledby="condition"
                value={form.seminovo}
                onChange={handleChange}
                name="seminovo"
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="0 Km"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Seminovo"
                />
              </StyledRadioGroup>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Placa"
                label="Placa"
                variant="outlined"
                name="placa"
                value={form.placa}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Renavam"
                label="Renavam"
                variant="outlined"
                name="renavam"
                value={form.renavam}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="select-brand"
                id="select-brand"
                label="Brand"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                fullWidth
              >
                {brands.map((brand) => {
                  return (
                    <MenuItem key={brand.id} value={brand.name}>
                      {brand.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="select-model"
                id="select-model"
                label="Modelo"
                placeholder="Modelo..."
                name="model"
                value={form.model}
                onChange={handleChange}
                fullWidth
              >
                {brands
                  .find((currentBrand) => currentBrand.name === form.brand)
                  .models.map((model, index) => (
                    <MenuItem key={index} value={model}>
                      {model}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="select-bodywork"
                id="select-bodywork"
                label="Carroceria"
                placeholder="Carroceria..."
                name="bodywork"
                value={form.bodywork}
                onChange={handleChange}
                fullWidth
              >
                {bodyworks.map((bodywork, index) => (
                  <MenuItem key={index} value={bodywork}>
                    {bodywork}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={3}>
              Nothing
            </Grid>
            <Grid item xs={3}>
              Nothing
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Version"
                label="Versão"
                variant="outlined"
                name="version"
                value={form.version}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="select-fuel"
                id="select-fuel"
                label="Combustível"
                placeholder="Combustível..."
                name="fuel"
                value={form.fuel}
                onChange={handleChange}
                fullWidth
              >
                {fuelType.map((fuel, index) => (
                  <MenuItem key={index} value={fuel}>
                    {fuel}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="select-shift"
                id="select-shift"
                label="Câmbio"
                placeholder="Câmbio..."
                name="shift"
                value={form.shift}
                onChange={handleChange}
                fullWidth
              >
                {shiftType.map((shift, index) => (
                  <MenuItem key={index} value={shift}>
                    {shift}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                id="km"
                label="Quilometragem"
                placeholder="70.000"
                variant="outlined"
                name="km"
                value={form.km}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="select-color"
                id="select-color"
                label="Cor"
                placeholder="Cor"
                name="carColor"
                value={form.carColor}
                onChange={handleChange}
                fullWidth
              >
                {carColors.map((color, index) => (
                  <MenuItem key={index} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={informationAciveTab} index={1}>
          No informations here :c
        </TabPanel>

        <Subtitle colors={colors}>Acessórios</Subtitle>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-acessories"
          options={accessories}
          getOptionLabel={(accessorie) => accessorie}
          value={form.accessories}
          onChange={handleAccessoriesChange}
          fullWidth
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="Acessórios"
                placeholder="Acessórios"
              />
            );
          }}
        />

        <Subtitle colors={colors}>Características</Subtitle>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-characteristics"
          options={characteristics}
          getOptionLabel={(characteristic) => characteristic}
          value={form.characteristics}
          onChange={handleCharacteristcsChange}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Características"
              placeholder="Características"
            />
          )}
        />

        <Subtitle colors={colors}>Localização</Subtitle>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Autocomplete
              id="autocomplete-state"
              options={locations.map((location) => location.estado)}
              value={form.state}
              onChange={handleChange}
              fullWidth
              renderInput={(params, index) => (
                <TextField key={index} {...params} label="Estado" />
              )}
            />
          </Grid>
          <Grid item xs={8}>
            <Autocomplete
              id="autocomplete-city"
              value={form.city}
              onChange={handleChange}
              options={
                locations.find((location) => location.estado === form.state)
                  .cidades
              }
              fullWidth
              renderInput={(params, index) => (
                <TextField key={index} {...params} label="Cidade" />
              )}
            />
          </Grid>
        </Grid>

        <Subtitle colors={colors}>Classificação</Subtitle>
        <StyledToggleButtonGroup
          color="primary"
          value={form.rate}
          onChange={handleChange}
        >
          {classification.map((rate) => (
            <StyledToggleButton
              colors={colors}
              key={rate.id}
              value={rate.label}
              onChange={handleChange}
              name="rate"
            >
              {rate.label}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>

        <Subtitle colors={colors}>Condição geral do veículo</Subtitle>
        <StyledToggleButtonGroup
          color="primary"
          exclusive
          value={form.condition}
          onChange={handleChange}
        >
          {conditions.map((condition) => (
            <StyledToggleButton
              colors={colors}
              key={condition.id}
              value={condition.label}
              onChange={handleChange}
              name="condition"
            >
              {condition.label}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>

        <Subtitle colors={colors}>Tags</Subtitle>
        {tags.map((tag, index) => (
          <StyledChip
            colors={colors}
            key={index}
            label={tag}
            variant="outlined"
          />
        ))}

        <Tabs value={avaliationActiveTab} onChange={handleAvaliationTabChange}>
          <Tab label="Avaliação de venda" {...tabProps(0, "avaliation")} />
          <Tab label="Avaliação de revenda" {...tabProps(1, "avaliation")} />
          <Tab label="Preço Desejado" {...tabProps(2, "avaliation")} />
        </Tabs>

        <TabPanel value={avaliationActiveTab} index={0}>
          <Grid container spacing={2}>
            <Grid item container xs={6}>
              <TextField
                id="max-price"
                label="Preço máximo"
                type="number"
                variant="outlined"
                name="maxPrice"
                value={form.maxPrice}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                id="min-price"
                label="Preço mínimo"
                type="number"
                variant="outlined"
                name="minPrice"
                value={form.minPrice}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <PriceRangeWrapper colors={colors}>
                <PriceRangeTop colors={colors}>
                  <p>Faixa de Preço do KBB</p>
                  <span>
                    R$ {normalizeNumber(data.avaliacao.faixa_preco_max)} - R$
                    {normalizeNumber(data.avaliacao.faixa_preco_max)}
                  </span>
                </PriceRangeTop>
                <PriceRangeBottom colors={colors}>
                  <p>Faixa de Preço particular</p>
                  <span>
                    R$ {normalizeNumber(data.avaliacao.faixa_preco_particular)}
                  </span>
                </PriceRangeBottom>
              </PriceRangeWrapper>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={avaliationActiveTab} index={1}>
          Nothing here yet.
        </TabPanel>

        <TabPanel value={avaliationActiveTab} index={2}>
          Also nothing here yet.
        </TabPanel>

        <SubmitButtonWrapper colors={colors}>
          <Button variant="outlined" onClick={handleSubmit}>
            Salvar
          </Button>
        </SubmitButtonWrapper>
      </form>
    </Content>
  );
}
