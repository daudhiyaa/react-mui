import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiTypography />
      </div>
    </LocalizationProvider>
  );
}

export default App;
