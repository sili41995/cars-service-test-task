import { FC } from 'react';
import { IProps } from './FiltersList.types';
import { Input, Item, Label, List, Title } from './FiltersList.styled';

const FiltersList: FC<IProps> = ({ filters, name, action, currentValue }) => {
  return (
    <List>
      {filters.map((item, index) => {
        const isActive = currentValue.toLowerCase() === item.toLowerCase();
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
};

export default FiltersList;
