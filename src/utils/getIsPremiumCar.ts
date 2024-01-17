import { Keywords } from 'constants/index';
import { ICar } from 'types/types';

const getIsPremiumCar = (car: ICar): boolean => {
  const keys = Object.keys(car);
  const characteristics = keys.flatMap((key) => car[key]);
  const isPremiumCar = characteristics.some((item) =>
    typeof item === 'string'
      ? item.toLowerCase().includes(Keywords.premium.toLowerCase())
      : false
  );

  return isPremiumCar;
};

export default getIsPremiumCar;
