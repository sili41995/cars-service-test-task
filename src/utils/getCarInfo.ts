import { ICar, ICarInfo } from 'types/types';
import defaultCarImage from 'images/default-car-image.jpg';
import getCarCharacteristics from './getCarCharacteristics';

const getCarInfo = (car: ICar): ICarInfo => {
  const { make, model, img, type, mileage, functionalities } = car;

  const carImg = img ? img : defaultCarImage;
  const carImgDesc = `${make} ${model}`;
  const carCharacteristics = getCarCharacteristics(car);
  const otherCarCharacteristics = [
    type,
    model,
    String(mileage),
    functionalities[0],
  ];

  return {
    carImg,
    carImgDesc,
    carCharacteristics,
    otherCarCharacteristics,
  };
};

export default getCarInfo;
