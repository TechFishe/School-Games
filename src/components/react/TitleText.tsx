import {useEffect, useState, useRef} from "react";

interface Props{
    text: string
}

export default function TitleText(props: Props){
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const [text, setText] = useState(props.text);

    useEffect(() => {
        let tempText = props.text;
        let iterations = 0;

        const interval = setInterval(() => {
            setText(tempText.split("").map((letter, index) => {
                if(index < iterations) return props.text[index];
                else return letters[Math.floor(Math.random() * 26)];
            }).join(""));

            if(iterations >= props.text.length) clearInterval(interval);
            iterations += 1/3;
        }, 60)
    }, []);

    return(
        <h1 className="w-1/2 pl-8 text-6xl font-bold tracking-wide uppercase">{text}</h1>
    )
}