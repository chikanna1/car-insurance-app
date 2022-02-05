import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Header from "./components/header/header.component";
import { Route, Routes, Navigate } from "react-router-dom";

library.add(fas, fab, far);

class App extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
