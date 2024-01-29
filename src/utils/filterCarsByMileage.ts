import { ICar, IFilterCarsByMileageProps } from 'types/types';

const filterCarsByMileage = ({
  cars,
  mileageFrom,
  mileageTo,
}: IFilterCarsByMileageProps): ICar[] => {
  const mileageToIsAbsent = !mileageTo || !Number(mileageTo);

  if (mileageToIsAbsent) {
    return cars.filter(({ mileage }) => mileage >= Number(mileageFrom));
  }

  if (!mileageFrom) {
    return cars.filter(({ mileage }) => mileage < Number(mileageTo));
  }

  return cars.filter(
    ({ mileage }) =>
      mileage >= Number(mileageFrom) && mileage < Number(mileageTo)
  );
};

export default filterCarsByMileage;
