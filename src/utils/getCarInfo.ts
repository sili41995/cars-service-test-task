import { ICar, ICarInfo } from 'types/types';
import defaultCarImage from 'images/default-car-image.jpg';
import getCarCharacteristics from './getCarCharacteristics';
import getAllCarFunctionalities from './getAllCarFunctionalities';
import getDetailsCarCharacteristics from './getDetailsCarCharacteristics';
import getCarEngineCharacteristics from './getCarEngineCharacteristics';
import getRentalConditionsCar from './getRentalConditionsCar';

const getCarInfo = (car: ICar): ICarInfo => {
  const { make, model, img, type, mileage, rentalConditions, rentalPrice } =
    car;

  const carImg = img ? img : defaultCarImage;
  const carImgDesc = `${make} ${model}`;
  const carCharacteristics = getCarCharacteristics(car);
  const allCarFunctionalities = getAllCarFunctionalities(car);
  const detailsCarCharacteristics = getDetailsCarCharacteristics(car);
  const carEngineCharacteristics = getCarEngineCharacteristics(car);
  const rentalConditionsCar = getRentalConditionsCar(rentalConditions);
  const rental = [
    ...rentalConditionsCar,
    `Mileage: ${mileage}`,
    `Price: ${rentalPrice}`,
  ];
  const otherCarCharacteristics = [
    type,
    model,
    String(mileage),
    allCarFunctionalities[0],
  ];

  return {
    carImg,
    carImgDesc,
    functionalities: [carCharacteristics, otherCarCharacteristics],
    detailsCharacteristics: [
      detailsCarCharacteristics,
      carEngineCharacteristics,
    ],
    rental,
  };
};

export default getCarInfo;
