import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <AnimatedRoutes />
      </Header>
    </BrowserRouter>
  );
}

export default App;
