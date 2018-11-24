import React from "react";

import { Row, Col } from "reactstrap";

import therapists from "../therapists";

import Styles from "./therapist-list.module.scss";

export default function TherapistList() {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    Here are some therapists for you to choose from:
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
                        <Col md={9} sm={8}>
                            <h3>{therapist.name}</h3>
                            <div>
                                {therapist.name} likes:
                                <ul>
                                    {therapist.interests.map(interest => (
                                        <li className={Styles.interest}>
                                            {interest}
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
