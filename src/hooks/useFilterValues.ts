import { GeneralParams, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from './useSetSearchParams';
import { addDelimiter, firstSymbolToUpperCase } from 'utils';

const useFilterValues = () => {
  const { searchParams } = useSetSearchParams();
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const mileageFrom = searchParams.get(SearchParamsKeys.mileageFrom) ?? '';
  const brandDefaultValue = firstSymbolToUpperCase(brand);
  const priceDefaultValue = price && `${price}${GeneralParams.dollar}`;
  const mileageDefaultValue = addDelimiter({
    str: mileageFrom,
    delimiter: String(GeneralParams.comma),
    position: Number(GeneralParams.maxNumLength),
  });

  return {
    brand,
    price,
    mileageFrom,
    brandDefaultValue,
    priceDefaultValue,
    mileageDefaultValue,
  };
};

export default useFilterValues;
