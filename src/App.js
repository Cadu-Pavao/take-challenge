import styled from "@emotion/styled";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Vehicles from "./pages/Vehicles/Vehicles";
import EditVehicle from "./pages/EditVehicle/EditVehicle";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const Content = styled.div`
  display: flex;
`;

function App() {
  const [theme, colorMode] = useMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              <Content>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Vehicles />} />
                  <Route path="/edit-vehicle" element={<EditVehicle />} />
                </Routes>
              </Content>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
