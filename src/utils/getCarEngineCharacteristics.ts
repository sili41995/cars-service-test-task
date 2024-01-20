import { ICar } from 'types/types';

const getCarEngineCharacteristics = (car: ICar) => {
  const { fuelConsumption, engineSize } = car;

  return [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`];
};

export default getCarEngineCharacteristics;
