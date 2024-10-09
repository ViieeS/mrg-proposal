import sanitizeNonCyrillicСharacters from './sanitizeNonCyrillicСharacters';

const checkAnswer = (userInput: string): boolean => {
  userInput = sanitizeNonCyrillicСharacters(userInput);
  return userInput.toLowerCase() === 'да';
};

export default checkAnswer;
