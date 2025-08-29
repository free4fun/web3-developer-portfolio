import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number, startDelay: number) => {
    const [typedText, setTypedText] = useState('');
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);
    
    useEffect(() => {
        if (isStarted && typedText.length < text.length) {
            const timeout = setTimeout(() => {
                setTypedText(text.slice(0, typedText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [typedText, text, speed, isStarted]);

    return typedText;
};
