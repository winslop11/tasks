import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="mcqs">
                <Form.Label>Which is the Answer?</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((singleOption: string) => (
                        <option key={singleOption} value={singleOption}>
                            {singleOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
