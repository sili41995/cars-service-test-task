import { IFilters } from 'types/types';
import getValidPrice from './getValidPrice';
import getValueWithoutDelimiter from './getValueWithoutDelimiter';
import { GeneralParams } from 'constants/index';

const getValidFormValues = (formData: IFilters): IFilters => {
  const price = getValidPrice(formData.price);
  const mileageFrom = getValueWithoutDelimiter({
    value: formData.mileageFrom,
    delimiter: String(GeneralParams.comma),
  });

  return { ...formData, price, mileageFrom };
};

export default getValidFormValues;
