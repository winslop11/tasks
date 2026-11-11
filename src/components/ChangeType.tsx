import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function changeQType(): void {
        qType === "short_answer_question" ?
            setQType("multiple_choice_question")
        :   setQType("short_answer_question");
    }

    return (
        <div>
            <Button onClick={changeQType}>Change Type</Button>
            {qType === "multiple_choice_question" ?
                <span>Multiple Choice</span>
            :   <span>Short Answer</span>}
        </div>
    );
}
