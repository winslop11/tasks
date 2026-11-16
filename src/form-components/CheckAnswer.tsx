import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Label>Check Answer</Form.Label>
            <Form.Control value={answer} onChange={updateAnswer} />
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
