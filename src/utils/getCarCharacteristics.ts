import { ICar } from 'types/types';
import getCarLocation from './getCarLocation';
import getIsPremiumCar from './getIsPremiumCar';
import { Keywords } from 'constants/index';

const getCarCharacteristics = (car: ICar): string[] => {
  const { address, rentalCompany } = car;
  const carLocation = getCarLocation(address);
  const characteristics = [...carLocation, rentalCompany];
  const isPremiumCar = getIsPremiumCar(car);
  isPremiumCar && characteristics.push(Keywords.premium);

  return characteristics;
};

export default getCarCharacteristics;
