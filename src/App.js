import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Projects from "./components/Projects";

// import Eos from "eosjs";
import eos from "./eos";

class App extends Component {
  render() {
    // var eos = Eos.Testnet();
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              VERIFUND
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div style={{ padding: 5 }}>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
