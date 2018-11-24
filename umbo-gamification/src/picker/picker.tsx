import React from "react";

import questionData from "../question-data";

import Question from "./question";

type State = {
    currentQuestionIndex: number;
};
export default class Picker extends React.Component<{}, State> {
    state = {
        currentQuestionIndex: 0
    };

    onQuestionAnswered = (answerId: string) => {
        this.setState(state => ({
            currentQuestionIndex: state.currentQuestionIndex + 1
        }));
    };

    render() {
        const currentQuestion =
            questionData.questions[this.state.currentQuestionIndex];

        return (
            <div>
                <Question
                    question={currentQuestion}
                    onQuestionAnswered={this.onQuestionAnswered}
                />
            </div>
        );
    }
}
