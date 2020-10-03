
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import MyLearning from "./routes/MyLearning";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
// import logo from './logo.svg';
import './App.css';

function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/my-learning" component={MyLearning} />
  </HashRouter>;
}
export default App;