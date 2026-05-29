import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Others from "./components/Others";
import Footer from "./components/Footer";

import "./App.css";
import "./layout_2506.css";   
import "./module.css";         

function App() {
  return (
    <>
      <Header />
      <main id="mainCnt">
        <About />
        <div id="contents">
          <Skills />
          <Works />
          <Others />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;