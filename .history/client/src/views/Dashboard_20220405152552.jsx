import React, { useEffect } from "react";
import { PostContext } from "../contexts/PostContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Spinner, Card, Button } from "react-bootstrap";

const Dashboard = () => {
    // get Context:
    const {
        postState: { posts, postsLoading },
        getPosts,
    } = useContext(PostContext);

    const {
        authState: {
            user: { username },
        },
    } = useContext(AuthContext);

    // Start get all post:
    useEffect(() => getPosts(), []);

    // Render all Post: Chia ra thành các trường hợp có thể xảy ra:
    let body = null;
    if (postsLoading) {
        // Nếu còn đang loadding => Hiển thị spiner đợi
        body = (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (posts.length === 0) {
        // Xong rồi thì kiểm tra xem ông này nếu chưa có Post nào
        body = (
            <>
                <Card className="text-center mx-5 my-5">
                    <Card.Header as="h1">Hi {username}</Card.Header>
                    <Card.Body>
                        <Card.Title>Wellcome to LearnIt</Card.Title>
                        <Card.Text>
                            Click the button below to track your first skill to
                            learn
                        </Card.Text>
                        <Button variant="primary">LearnIt!</Button>
                    </Card.Body>
                </Card>
            </>
        );
    } else {
    }

    return (
        <div className="">
            <div className="">Dashboard</div>
        </div>
    );
};

export default Dashboard;
