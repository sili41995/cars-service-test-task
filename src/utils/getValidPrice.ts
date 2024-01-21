import { GeneralParams } from 'constants/index';

const getValidPrice = (invalidPrice: string): string =>
  invalidPrice.split(GeneralParams.dollar).join(GeneralParams.emptyStr);

export default getValidPrice;
