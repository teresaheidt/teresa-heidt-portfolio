import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import './App.css';



function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />

      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
