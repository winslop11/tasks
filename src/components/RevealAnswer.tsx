import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [Vis, setVis] = useState<boolean>(false);

    function changeVis(): void {
        setVis(!Vis);
    }

    return (
        <div>
            <Button onClick={changeVis}>Reveal Answer</Button>;
            {Vis && <div>42</div>}
        </div>
    );
}
