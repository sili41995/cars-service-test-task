import { GeneralParams } from 'constants/index';

export interface IAddDelimiterToInputValueProps {
  value: string;
  delimiter: string;
  position: number;
}

const addDelimiterToInputValue = ({
  value,
  delimiter,
  position,
}: IAddDelimiterToInputValueProps): string => {
  const valueWithoutDelimiter = value
    .split(delimiter)
    .join(GeneralParams.emptyStr);
  const needDelimiter = valueWithoutDelimiter.length > position;

  if (needDelimiter) {
    const symbols = value
      .split(GeneralParams.emptyStr)
      .filter((item) => item !== delimiter)
      .reverse();
    let offset = 0;

    symbols.forEach((_, index) => {
      if (index && index % position === 0) {
        symbols.splice(index + offset, 0, delimiter);
        offset += 1;
      }
    });

    return symbols.reverse().join(GeneralParams.emptyStr);
  }

  return value.split(delimiter).join(GeneralParams.emptyStr);
};

export default addDelimiterToInputValue;
