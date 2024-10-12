import { useState, useEffect } from "react";

const useTypewriter = (
  text: string,
  speed: number = 50,
  onFinish?: () => void
) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        let newText = text.substring(0, i + 1);

        if (i + 1 !== text.length) {
          newText += "|";
        }

        setDisplayText(newText);
        i++;
      } else {
        clearInterval(typingInterval);
        onFinish?.();
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, onFinish]);

  return displayText;
};

interface Props {
  text: string;
  speed: number;
  onFinish?: () => void;
}

const Typewriter: React.FC<Props> = ({ text, speed, onFinish }) => {
  const displayText = useTypewriter(text, speed, onFinish);

  return <div>{displayText}</div>;
};

export default Typewriter;
