import React from "react";

import { Card, Row, Col, Badge, Button } from "react-bootstrap";

const SinglePost = ({ post }) => {
    const { _id, status, title, description, url } = post;

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
            <Card.Body></Card.Body>
        </Card>
    );
};

export default SinglePost;
