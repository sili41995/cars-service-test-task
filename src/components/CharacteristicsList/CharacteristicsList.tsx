import { FC } from 'react';
import { IProps } from './CharacteristicsList.types';

const CharacteristicsList: FC<IProps> = ({ characteristics }) => {
  return (
    <ul>
      {characteristics.map((characteristicsItem) => (
        <li>
          <p>{characteristicsItem}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharacteristicsList;
