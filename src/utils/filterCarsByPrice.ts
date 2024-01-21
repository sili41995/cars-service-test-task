import { ICar, IFilteredCarsProps } from 'types/types';
import getValidPrice from './getValidPrice';

const filterCarsByPrice = ({ cars, filter }: IFilteredCarsProps): ICar[] => {
  if (!filter) {
    return cars;
  }

  return cars.filter((car) => {
    const rentalPrice = getValidPrice(car.rentalPrice);

    return Number(rentalPrice) < Number(filter);
  });
};

export default filterCarsByPrice;
