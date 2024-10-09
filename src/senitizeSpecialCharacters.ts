const senitizeSpecialСharacters = (str: string): string => {
  return str.replace(/[^\w\s]/gi, '');
};

export default senitizeSpecialСharacters;
