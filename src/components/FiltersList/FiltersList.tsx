import { FC } from 'react';
import { IProps } from './FiltersList.types';
import { Input, Item, Label, List, Title } from './FiltersList.styled';
import { SearchParamsKeys } from 'constants/index';
import { getValidPrice } from 'utils';

const FiltersList: FC<IProps> = ({ filters, action, currentValue, name }) => (
  <List name={name}>
    <Item>
      <Label>
        <Title className={!currentValue ? 'active' : ''}>All</Title>
        <Input type='radio' value='' name={name} onClick={action} />
      </Label>
    </Item>
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
