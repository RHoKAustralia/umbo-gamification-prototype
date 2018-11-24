import React, { Component } from "react";
import Picker from "./picker/picker";
import {Container} from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import TherapistList from "./therapists/therapist-list";

import "./App.css";

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
            <Container>
                {this.state.page === "picker" && (
                    <Picker onComplete={this.onQuestionsComplete} />
                )}
                {this.state.page === "therapists" && <TherapistList />}
            </Container>
        );
    }
}

export default App;
