import { FC } from 'react';
import { IProps } from './CharacteristicsList.types';
import { Item, List, Text } from './CharacteristicsList.styled';

const CharacteristicsList: FC<IProps> = ({ characteristics }) => {
  return (
    <List>
      {characteristics.map((characteristicsItem, index) => (
        <Item key={index}>
          <Text>{characteristicsItem}</Text>
        </Item>
      ))}
    </List>
  );
};

export default CharacteristicsList;
