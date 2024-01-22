import {
  Input,
  InputWrap,
  Label,
  Prefix,
  Title,
  ToggleMenuBtn,
} from './FilterItem.styled';
import FiltersList from 'components/FiltersList';
import { FC } from 'react';
import { IProps } from './FilterItem.types';

const FilterItem: FC<IProps> = ({
  title,
  prefix,
  inputSettings,
  menuBtnIcon,
  showMenu,
  action,
  currentValue,
  variants,
  onMenuBtnClick,
  defaultValue,
  placeholder,
  leftDistance,
  filtersListName,
  disabled = false,
}) => {
  return (
    <Label>
      <Title>{title}</Title>
      <InputWrap>
        {prefix && <Prefix leftDistance={leftDistance}>{prefix}</Prefix>}
        <Input
          {...inputSettings}
          type='text'
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        <ToggleMenuBtn
          type='button'
          onClick={onMenuBtnClick}
          showFiltersList={showMenu}
          //или сделать другую переменную
        >
          {menuBtnIcon}
        </ToggleMenuBtn>
      </InputWrap>
      {showMenu && (
        <FiltersList
          filters={variants}
          name={filtersListName}
          action={action}
          currentValue={currentValue}
        />
      )}
    </Label>
  );
};

export default FilterItem;
