import { FC } from 'react';
import { IProps } from './FunctionalitiesList.types';
import CharacteristicsList from 'components/CharacteristicsList';
import { Item, List } from './FunctionalitiesList.styled';

const FunctionalitiesList: FC<IProps> = ({ functionalities }) => (
  <List>
    {functionalities.map((item, index) => (
      <Item key={index}>
        <CharacteristicsList characteristics={item} />
      </Item>
    ))}
  </List>
);

export default FunctionalitiesList;
