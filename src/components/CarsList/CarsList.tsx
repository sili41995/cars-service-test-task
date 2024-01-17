import { FC } from 'react';
import { IProps } from './CarsList.types';
import CarsListItem from 'components/CarsListItem';
import { List } from './CarsList.styled';

const CarsList: FC<IProps> = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <CarsListItem key={car.id} car={car} />
      ))}
    </List>
  );
};

export default CarsList;
