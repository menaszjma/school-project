const generateRandomCode = () => {
  const code = Math.random().toString(36).substr(2);
  return code;
};
