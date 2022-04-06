import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";

const SinglePost = ({ post: { _id, status, title, description, url } }) => {
    //const { _id, status, title, description, url } = post;

    return (
        <Card
            className="shadow"
            border={
                status === "LEARNED"
                    ? "success"
                    : status === "LEARNING"
                    ? "warning"
                    : "danger"
            }
        >
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                            <p className="post-title">{title}</p>
                            <Badge
                                pill
                                bg={
                                    status === "LEARNED"
                                        ? "success"
                                        : status === "LEARNING"
                                        ? "warning"
                                        : "danger"
                                }
                            >
                                {status}
                            </Badge>
                        </Col>
                        <Col className="text-right">Buttons</Col>
                    </Row>
                </Card.Title>

                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SinglePost;
