import { FC } from 'react';
import { IProps } from './CarsListItem.types';
import { getCarInfo } from 'utils';
import { Item } from './CarsListItem.styled';

const CarsListItem: FC<IProps> = ({ car }) => {
  const { make, model, year, rentalPrice } = car;

  const { carCharacteristics, carImg, otherCarCharacteristics } =
    getCarInfo(car);

  return (
    <Item>
      <img src={carImg} alt={`${make} ${model}`} />
      <p>
        {make} <span>{model}</span>, {year}
      </p>
      <p>{rentalPrice}</p>
      <p>{carCharacteristics}</p>
      <p>{otherCarCharacteristics}</p>
      <button type='button'>Learn more</button>
    </Item>
  );
};

export default CarsListItem;
