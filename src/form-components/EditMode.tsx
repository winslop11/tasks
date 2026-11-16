import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [canEdit, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    function changeStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function enableEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    return (
        <div>
            {canEdit ?
                <Form.Group controlId="editName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={changeName} />
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={changeStudentStatus}
                    />
                </Form.Group>
            :   <div>
                    {name.concat(
                        isStudent ? " is a student" : " is not a student",
                    )}
                </div>
            }
            <Form.Check
                type="switch"
                id="can-edit-check"
                label="Edit Mode"
                checked={canEdit}
                onChange={enableEditMode}
            />
        </div>
    );
}
