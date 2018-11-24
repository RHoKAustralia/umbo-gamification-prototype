import React from "react";

import { Row, Col } from "reactstrap";

import therapists from "../therapists";

import Styles from "./therapist-list.module.scss";

export default function TherapistList() {
    return (
        <React.Fragment>
            <Row className={Styles["intro-row"]}>
                <Col xs={12}>
                    Thanks for filling that out! Here are some people who would
                    be great for you. Who do you like the most?
                </Col>
            </Row>
            {therapists.map(therapist => (
                <React.Fragment key={therapist.name}>
                    <Row className={Styles["therapist-row"]}>
                        <Col md={3} sm={4}>
                            <div
                                className={Styles.headshot}
                                style={{
                                    backgroundImage: `url('${
                                        therapist.imageUrl
                                    }')`
                                }}
                            />
                        </Col>
                        <Col md={9} sm={8} className={Styles["info-col"]}>
                            <h3>{therapist.name}</h3>
                            <div>
                                {therapist.name} likes:
                                <ul className={Styles["interest-list"]}>
                                    {therapist.interests.map(interest => (
                                        <li className={Styles.interest}>
                                            <img
                                                src={interest.imageUrl}
                                                className={
                                                    Styles["interest-image"]
                                                }
                                            />
                                            <div>{interest.name}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}
