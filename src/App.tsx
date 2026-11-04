import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>lorem ipsum</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. winslop Hello World
            </p>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <img
                src="https://media1.tenor.com/m/FuYhS1n_c0IAAAAC/cat-piano.gif"
                alt="ah yes, back to the good ol' days"
            />
            <ol>
                <li>^</li>
                <li>Cat</li>
                <li>Piano</li>
            </ol>
            <div style={{ position: "absolute" }}>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "24px",
                                    height: "18px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "24px",
                                    height: "18px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
