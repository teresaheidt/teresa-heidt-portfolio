import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './App.css';
// import { Transition } from "react-transition-group";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
     
        <Header />
    <Main />
    <Wrapper >
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      </Wrapper>
      <Footer />
      </div>
    </Router>
  );
}


export default App;
