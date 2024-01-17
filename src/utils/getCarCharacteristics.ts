import { ICar } from 'types/types';
import getCarLocation from './getCarLocation';
import getIsPremiumCar from './getIsPremiumCar';

const getCarCharacteristics = (car: ICar): string[] => {
  const { address, rentalCompany } = car;
  const carLocation = getCarLocation(address);
  const characteristics = [...carLocation, rentalCompany];
  const isPremiumCar = getIsPremiumCar(car);
  isPremiumCar && characteristics.push('Premium');

  return characteristics;
};

export default getCarCharacteristics;
