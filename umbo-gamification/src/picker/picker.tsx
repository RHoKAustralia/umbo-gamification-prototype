import React from "react";

import questionData from "../question-data";

import Question from "./question";


type State = {
    currentQuestionIndex: number;
};

type Props = {
    onComplete: () => void;
};
export default class Picker extends React.Component<Props, State> {
    state = {
        currentQuestionIndex: 0
    };

    onQuestionAnswered = (answerId: string) => {
        if (
            this.state.currentQuestionIndex <
            questionData.questions.length - 1
        ) {
            this.setState({
                currentQuestionIndex: this.state.currentQuestionIndex + 1
            });
        } else {
            this.props.onComplete();
        }
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
