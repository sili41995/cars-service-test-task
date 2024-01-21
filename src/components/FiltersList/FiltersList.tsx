import { FC } from 'react';
import { IProps } from './FiltersList.types';
import { Input, Item, Label, List, Title } from './FiltersList.styled';
import { SearchParamsKeys } from 'constants/index';
import { getValidPrice } from 'utils';

const FiltersList: FC<IProps> = ({ filters, name, action, currentValue }) => (
  <List name={name}>
    {filters.map((item, index) => {
      const inputValue =
        name === SearchParamsKeys.price
          ? getValidPrice(currentValue)
          : currentValue;
      const isActive = inputValue.toLowerCase() === item.toLowerCase();

      return (
        <Item key={index}>
          <Label>
            <Title className={isActive ? 'active' : ''}>{item}</Title>
            <Input type='radio' value={item} name={name} onClick={action} />
          </Label>
        </Item>
      );
    })}
  </List>
);

export default FiltersList;
