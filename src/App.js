import { Reset } from "styled-reset";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Reset />

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
