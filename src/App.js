import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Home } from "./components/Home";
import About from "./components/About";
import Exp from "./components/Exp";
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Exp />
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
