import { FC } from 'react';
import { IProps } from './RentalConditions.types';
import { GeneralParams } from 'constants/index';
import { addDelimiter, getIsNumber } from 'utils';
import { Accent, Item, List, Text } from './RentalConditions.styled';

const RentalConditions: FC<IProps> = ({ rentalConditions }) => {
  return (
    <List>
      {rentalConditions.map((item, index) => {
        const items = item.split(GeneralParams.delimiter);
        const lastIndex = items.length - 1;
        const isPrice = items[lastIndex].startsWith(GeneralParams.dollar);
        const splitItem = items[lastIndex].split(GeneralParams.emptyStr);

        if (isPrice) {
          splitItem.shift();
          splitItem.push(GeneralParams.dollar);
        }

        let formattedItem = splitItem.join(GeneralParams.emptyStr);
        const isNumber = getIsNumber(items);
        const isLongerNumber =
          !Number.isNaN(Number(formattedItem)) &&
          formattedItem.length > GeneralParams.maxNumLength;

        if (isLongerNumber) {
          formattedItem = addDelimiter({
            str: formattedItem,
            delimiter: ',',
            position: Number(GeneralParams.maxNumLength),
          });
        }

        return (
          <Item key={index}>
            {isNumber ? (
              <Text>
                {`${items.slice(0, lastIndex).join(GeneralParams.delimiter)} `}
                <Accent>{formattedItem}</Accent>
              </Text>
            ) : (
              <Text>{items.join(GeneralParams.delimiter)}</Text>
            )}
          </Item>
        );
      })}
    </List>
  );
};

export default RentalConditions;
