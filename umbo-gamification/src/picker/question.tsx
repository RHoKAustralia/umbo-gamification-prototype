import React from "react";

import Answer from "./answer";
import { Question } from "../question-data";
import { Row, Col } from "reactstrap";

type Props = {
    question: Question;
    onQuestionAnswered: (answerId: string) => void;
};

export default function QuestionComponent({
    question,
    onQuestionAnswered
}: Props) {
    return (
        <Row>
            <Col md={6}>
                <Answer
                    answer={question.answers[0]}
                    onClick={onQuestionAnswered}
                />
            </Col>
            <Col md={6}>
                <Answer
                    answer={question.answers[1]}
                    onClick={onQuestionAnswered}
                />
            </Col>
        </Row>
    );
}
