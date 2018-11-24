import React, { Component } from "react";
import "./App.css";
import Picker from "./picker/picker";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = { page: "picker" };

    render() {
        return <div>{this.state.page === "picker" && <Picker />}</div>;
    }
}

export default App;
