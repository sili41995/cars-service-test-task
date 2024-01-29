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
  const mileageTo = getValueWithoutDelimiter({
    value: formData.mileageTo,
    delimiter: String(GeneralParams.comma),
  });

  return { ...formData, price, mileageFrom, mileageTo };
};

export default getValidFormValues;
