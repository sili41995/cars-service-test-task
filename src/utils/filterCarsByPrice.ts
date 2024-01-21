import { GeneralParams } from 'constants/index';
import { ICar, IFilteredCarsProps } from 'types/types';

const filterCarsByPrice = ({ cars, filter }: IFilteredCarsProps): ICar[] => {
  if (!filter) {
    return cars;
  }

  return cars.filter((car) => {
    const rentalPrice = car.rentalPrice
      .split(GeneralParams.dollar)
      .join(GeneralParams.emptyStr);

    return Number(rentalPrice) < Number(filter);
  });
};

export default filterCarsByPrice;
