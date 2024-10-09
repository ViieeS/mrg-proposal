const sanitizeNonCyrillicСharacters = (str: string): string => {
  return str.replace(/[^а-яА-ЯёЁ]/g, '');
}

export default sanitizeNonCyrillicСharacters;