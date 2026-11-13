import React, { useState } from "react";
import { Button } from "react-bootstrap";


interface changeColorProps {
    setColorIndex: (new_color_index: number) => void
    colorIndex: number
    colors: string[]
}

function ChangeColor({setColorIndex, colorIndex, colors}: changeColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) >= colors.length ? 0 : colorIndex + 1); //dont want that number getting too big
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({colorIndex, colors}: changeColorProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: colors[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {    
    const colors = ["red", "blue", "green"];
    const [colorIndex, setColorIndex] = useState<number>(0);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {colors[colorIndex]}</span>
            <div>
                <ChangeColor colors={colors} setColorIndex={setColorIndex} colorIndex={colorIndex}></ChangeColor>
                <ColorPreview colors={colors} setColorIndex={setColorIndex} colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
