import { GeneralParams, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from './useSetSearchParams';
import { addDelimiter, firstSymbolToUpperCase } from 'utils';

const useFilterValues = () => {
  const { searchParams } = useSetSearchParams();
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const mileageFrom = searchParams.get(SearchParamsKeys.mileageFrom) ?? '';
  const mileageTo = searchParams.get(SearchParamsKeys.mileageTo) ?? '';
  const brandDefaultValue = firstSymbolToUpperCase(brand);
  const priceDefaultValue = price && `${price}${GeneralParams.dollar}`;
  const mileageFromDefaultValue = addDelimiter({
    str: mileageFrom,
    delimiter: String(GeneralParams.comma),
    position: Number(GeneralParams.maxNumLength),
  });
  const mileageToDefaultValue = addDelimiter({
    str: mileageTo,
    delimiter: String(GeneralParams.comma),
    position: Number(GeneralParams.maxNumLength),
  });

  return {
    brand,
    price,
    mileageFrom,
    mileageTo,
    brandDefaultValue,
    priceDefaultValue,
    mileageFromDefaultValue,
    mileageToDefaultValue,
  };
};

export default useFilterValues;
