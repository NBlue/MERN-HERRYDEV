import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Row className="mt-5" style={{ marginRight: 0 }}>
            <Col className="text-center">
                <Button
                    variant="success"
                    href="https://www.youtube.com/c/HenryWebDev"
                    size="lg"
                >
                    Visit my channel for more tutorials
                </Button>
                <br />
                <img
                    src="https://media.istockphoto.com/photos/abstract-icon-representing-the-ecological-call-to-recycle-and-reuse-picture-id1340716614?b=1&k=20&m=1340716614&s=170667a&w=0&h=Y3BzrAZMnhP5lRV8sa5f-ZwvTcQSxda_dC6nO3Jq2FE="
                    alt=""
                />
            </Col>
        </Row>
    );
};

export default About;
