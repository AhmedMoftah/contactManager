import React, { Component } from "react";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Ahmed Moftah"
          email="AhmedMoftah@live.com"
          phone="01069952040"
        />
      </div>
    );
  }
}
export default App;
