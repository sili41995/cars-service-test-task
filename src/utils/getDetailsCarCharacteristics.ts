import { ICar } from 'types/types';
import getCarLocation from './getCarLocation';

const getDetailsCarCharacteristics = (car: ICar): string[] => {
  const { address, year, type } = car;
  const carLocation = getCarLocation(address);

  return [...carLocation, `Year: ${year}`, `Type: ${type}`];
};

export default getDetailsCarCharacteristics;
