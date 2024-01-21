import { GeneralParams } from 'constants/index';

const firstSymbolToUpperCase = (str: string): string => {
  const symbols = str.split(GeneralParams.emptyStr);
  symbols[0] = symbols[0].toUpperCase();
  return symbols.join(GeneralParams.emptyStr);
};

export default firstSymbolToUpperCase;
