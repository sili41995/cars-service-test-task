import { FC } from 'react';
import { IProps } from './CharacteristicsList.types';

const CharacteristicsList: FC<IProps> = ({ characteristics }) => {
  return (
    <ul>
      {characteristics.map((characteristicsItem, index) => (
        <li key={index}>
          <p>{characteristicsItem}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharacteristicsList;
