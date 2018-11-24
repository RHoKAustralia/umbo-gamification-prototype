import React from "react";
import { Answer } from "../question-data";

import { Button } from "reactstrap";

import Styles from "./answer.module.scss";

type Props = { answer: Answer; onClick: (answerId: string) => void };

export default function AnswerComponent(props: Props) {
    return (
        <div className="d-flex flex-column align-items-center">
            <img className={Styles.image} src={props.answer.imageUrl} />

            <Button
                onClickCapture={() => {
                    props.onClick(props.answer.id);
                }}
            >
                {props.answer.text}
            </Button>
        </div>
    );
}
