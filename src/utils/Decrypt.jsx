import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DecryptText = ({ finalText, speed = 100 }) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];
        let currentText = Array.from({ length: finalText.length }, () => getRandomChar());
        let iteration = 0;

        const interval = setInterval(() => {
            currentText = currentText.map((char, index) =>
                index <= iteration ? finalText[index] : getRandomChar()
            );
            setDisplayText(currentText.join(""));
            if (iteration >= finalText.length) clearInterval(interval);
            iteration++;
        }, speed);

        return () => clearInterval(interval);
    }, [finalText, speed]);

    return (
        <div className="text-4xl tracking-wider text-white">
            {displayText}
        </div>
    );
};

DecryptText.propTypes = {
    finalText: PropTypes.string.isRequired,
    speed: PropTypes.number,
};

export default DecryptText;
