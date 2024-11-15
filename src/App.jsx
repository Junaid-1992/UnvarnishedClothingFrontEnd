 
import Routes from "./Routes/Routes";
import Scroll from "./ScrollToTop/Scroll";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
