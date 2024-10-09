import hashPassword from "./hashPassword";

const VALID_PASSWORD_HASH = 'a464c1e9f842b3db75bca8c898ba037c7bcef8fa3901c6aa12795d0ddbcd6c61';

const validatePassword = async (password: string): Promise<boolean> => {
  const passwordHash = await hashPassword(password);
  return passwordHash === VALID_PASSWORD_HASH;
};

export default validatePassword;
