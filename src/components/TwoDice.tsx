import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeft] = useState<number>(4);
    const [rightDie, setRight] = useState<number>(5);

    function left_roll(): void {
        setLeft(d6());
    }
    function right_roll(): void {
        setRight(d6());
    }

    return (
        <div>
            Two Dice:
            <Button onClick={left_roll}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={right_roll}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie ?
                leftDie === 1 ?
                    <span>Lose</span>
                :   <span>Win</span>
            :   <span>Keep Rollin</span>}
        </div>
    );
}
