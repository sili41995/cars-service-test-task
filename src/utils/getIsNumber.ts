import { GeneralParams } from 'constants/index';

const getIsNumber = (str: string[]): boolean =>
  str.some(
    (item) =>
      Number.parseInt(item) ||
      Number.parseInt(
        item
          .split(GeneralParams.emptyStr)
          .reverse()
          .join(GeneralParams.emptyStr)
      )
  );

export default getIsNumber;
