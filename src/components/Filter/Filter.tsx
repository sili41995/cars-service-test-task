import { IconSizes, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from 'hooks/useSetSearchParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFilters } from 'types/types';
import {
  Button,
  Form,
  Input,
  InputWrap,
  Label,
  Prefix,
  Title,
  ToggleMenuBtn,
} from './Filter.styled';
import { MouseEvent, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { firstSymbolToUpperCase, makeBlur } from 'utils';
import brands from 'constants/makes.json';
import FiltersList from 'components/FiltersList/FiltersList';

const Filter = () => {
  const [showBrandsList, setShowBrandsList] = useState<boolean>(false);
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const { register, handleSubmit, setValue, watch } = useForm<IFilters>();
  const brandInputValue = watch(SearchParamsKeys.brand);
  const brandDefaultValue = firstSymbolToUpperCase(brand);

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    Object.entries(data).forEach(([key, value]: string[]) => {
      if (!value) return;

      updateSearchParams({ key, value: value.toLowerCase() });
    });
  };

  const onToggleMenuBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    setShowBrandsList((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  const onBrandClick = (e: MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const inputName = SearchParamsKeys.brand;
    setValue(inputName, value);
    setShowBrandsList(false);
  };

  const onSubmitFormBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Title>Car brand</Title>
        <InputWrap>
          <Input
            type='text'
            placeholder='Enter the text'
            defaultValue={brandDefaultValue}
            {...register(SearchParamsKeys.brand)}
          />
          <ToggleMenuBtn
            type='button'
            onClick={onToggleMenuBtnClick}
            showBrandsList={showBrandsList}
          >
            <FaChevronDown size={IconSizes.otherSize} />
          </ToggleMenuBtn>
        </InputWrap>
        {showBrandsList && (
          <FiltersList
            filters={brands}
            name={SearchParamsKeys.brand}
            action={onBrandClick}
            currentValue={brandInputValue}
          />
        )}
      </Label>
      <Label>
        <Title>Price/ 1 hour</Title>
        <InputWrap>
          <Prefix inputName={SearchParamsKeys.price}>To</Prefix>
          <Input
            {...register(SearchParamsKeys.price)}
            type='text'
            placeholder='$'
            defaultValue={price}
            disabled
          />
        </InputWrap>
      </Label>
      <Button type='submit' onClick={onSubmitFormBtnClick}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
