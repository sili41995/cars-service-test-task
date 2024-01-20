import { GeneralParams } from 'constants/index';

export interface IAddDelimiterProps {
  str: string;
  delimiter: string;
  position: number;
}

const addDelimiter = ({
  str,
  delimiter,
  position,
}: IAddDelimiterProps): string => {
  const symbols = str.split(GeneralParams.emptyStr).reverse();

  symbols.forEach((_, index) => {
    index && index % position === 0 && symbols.splice(index, 0, delimiter);
  });

  return symbols.reverse().join(GeneralParams.emptyStr);
};

export default addDelimiter;
