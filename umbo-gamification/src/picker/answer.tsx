import React from "react";
import { Answer } from "../question-data";

import { Button } from "reactstrap";

import Styles from "./answer.module.scss";

type Props = { answer: Answer; onClick: (answerId: string) => void };

export default function AnswerComponent(props: Props) {
    const onClick = () => {
        props.onClick(props.answer.id);
    };

    return (
        <div
            className={`d-flex flex-column align-items-center ${Styles.answer}`}
        >
            <Button onClickCapture={onClick}>{props.answer.text}</Button>
            
            <div className={Styles["image-wrapper"]}>
                <img
                    onClickCapture={onClick}
                    className={Styles.image}
                    src={props.answer.imageUrl}
                />
            </div>
        </div>
    );
}
