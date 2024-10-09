import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        let newText = text.substring(0, i + 1);

        if (i + 1 !== text.length) {
          newText += '|';
        }

        setDisplayText(newText);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

interface Props {
  text: string;
  speed: number;
}

const Typewriter: React.FC<Props> = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;
