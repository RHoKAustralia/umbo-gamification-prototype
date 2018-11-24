import React, { Component } from "react";
import "./App.css";
import Picker from "./picker/picker";

import "bootstrap/dist/css/bootstrap.css";
import TherapistList from "./therapists/therapist-list";

type State = {
    page: "picker" | "therapists";
};

class App extends Component<{}, State> {
    state: State = { page: "picker" };

    onQuestionsComplete = () => {
        this.setState({
            page: "therapists"
        });
    };

    render() {
        return (
            <div>
                {this.state.page === "picker" && (
                    <Picker onComplete={this.onQuestionsComplete} />
                )}
                {this.state.page === "therapists" && <TherapistList />}
            </div>
        );
    }
}

export default App;
