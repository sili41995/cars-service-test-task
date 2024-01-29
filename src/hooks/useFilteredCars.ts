import { useMemo } from 'react';
import {
  filterCarsByBrand,
  filterCarsByMileage,
  filterCarsByPrice,
} from 'utils';
import useGlobalState from './useGlobalState';
import useFilterValues from './useFilterValues';

const useFilteredCars = () => {
  const { cars } = useGlobalState();
  const { brand, price, mileageFrom, mileageTo } = useFilterValues();

  const filteredCarsByBrand = useMemo(
    () => cars && filterCarsByBrand({ cars, filter: brand }),
    [brand, cars]
  );

  const filteredCarsByPrice = useMemo(
    () =>
      filteredCarsByBrand &&
      filterCarsByPrice({
        cars: filteredCarsByBrand,
        filter: price,
      }),
    [filteredCarsByBrand, price]
  );

  const filteredCars = useMemo(
    () =>
      filteredCarsByPrice &&
      filterCarsByMileage({
        cars: filteredCarsByPrice,
        mileageFrom,
        mileageTo,
      }),
    [filteredCarsByPrice, mileageFrom, mileageTo]
  );

  return filteredCars;
};

export default useFilteredCars;
