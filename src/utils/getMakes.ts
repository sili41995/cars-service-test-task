import { ICar } from 'types/types';

const getMakes = (cars: ICar[] | null): string[] | null => {
  if (!cars) {
    return cars;
  }

  const makes = cars.map((car) => car.make);
  const makesSet = new Set(makes);

  return Array.from(makesSet).sort((prevMake, nextMake) =>
    prevMake.localeCompare(nextMake)
  );
};

export default getMakes;
