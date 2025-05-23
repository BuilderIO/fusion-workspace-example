import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import HomePage from "./HomePage";
import "./App.css";

const engine = new Styletron();

function App(): JSX.Element {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
