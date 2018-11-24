import React from "react";
import { Answer } from "../question-data";

type Props = { answer: Answer; onClick: (answerId: string) => void };

export default function AnswerComponent(props: Props) {
    return (
        <div>
            <button
                onClickCapture={() => {
                    props.onClick(props.answer.id);
                }}
            >
                {props.answer.text}
            </button>
        </div>
    );
}
