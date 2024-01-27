import { GeneralParams } from 'constants/index';
import { IGetValueWithoutDelimiterProps } from 'types/types';

const getValueWithoutDelimiter = ({
  value,
  delimiter,
}: IGetValueWithoutDelimiterProps): string =>
  value.split(delimiter).join(GeneralParams.emptyStr);

export default getValueWithoutDelimiter;
