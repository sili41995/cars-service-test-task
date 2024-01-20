import { ICar, ICarInfo } from 'types/types';
import defaultCarImage from 'images/default-car-image.jpg';
import getCarCharacteristics from './getCarCharacteristics';
import getAllCarFunctionalities from './getAllCarFunctionalities';

const getCarInfo = (car: ICar): ICarInfo => {
  const { make, model, img, type, mileage } = car;

  const carImg = img ? img : defaultCarImage;
  const carImgDesc = `${make} ${model}`;
  const carCharacteristics = getCarCharacteristics(car);
  const allCarFunctionalities = getAllCarFunctionalities(car);
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
  };
};

export default getCarInfo;
