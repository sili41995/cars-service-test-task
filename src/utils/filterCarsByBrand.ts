import { ICar, IFilteredCarsProps } from 'types/types';

const filterCarsByBrand = ({ cars, filter }: IFilteredCarsProps): ICar[] =>
  filter
    ? cars.filter((car) =>
        car.make.toLowerCase().includes(filter.toLowerCase())
      )
    : cars;

export default filterCarsByBrand;
