import React from "react";

import Answer from "./answer";
import { Question } from "../question-data";

type Props = {
    question: Question;
    onQuestionAnswered: (answerId: string) => void;
};

export default function QuestionComponent({
    question,
    onQuestionAnswered
}: Props) {
    return (
        <div>
            <Answer answer={question.answers[0]} onClick={onQuestionAnswered} />
            <Answer answer={question.answers[1]} onClick={onQuestionAnswered} />
        </div>
    );
}
