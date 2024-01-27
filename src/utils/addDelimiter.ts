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
  let offset = 0;

  symbols.forEach((_, index) => {
    if (index && index % position === 0) {
      symbols.splice(index + offset, 0, delimiter);
      offset += 1;
    }
  });

  return symbols.reverse().join(GeneralParams.emptyStr);
};

export default addDelimiter;
