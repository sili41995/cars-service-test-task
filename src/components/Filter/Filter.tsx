import { GeneralParams, IconSizes, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from 'hooks/useSetSearchParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFilters, IOnToggleMenuBtnClickProps } from 'types/types';
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
import {
  firstSymbolToUpperCase,
  getPriceList,
  getValidPrice,
  makeBlur,
} from 'utils';
import brands from 'constants/makes.json';
import FiltersList from 'components/FiltersList/FiltersList';
import { useAppSelector } from 'hooks/redux';
import { selectCars } from '../../redux/cars/selectors';

const Filter = () => {
  const [showBrandsList, setShowBrandsList] = useState<boolean>(false);
  const [showPricesList, setShowPricesList] = useState<boolean>(false);
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const cars = useAppSelector(selectCars);
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const { register, handleSubmit, setValue, watch } = useForm<IFilters>();
  const brandInputValue = watch(SearchParamsKeys.brand);
  const priceInputValue = watch(SearchParamsKeys.price) ?? '';
  const brandDefaultValue = firstSymbolToUpperCase(brand);
  const priceList = getPriceList({
    cars,
    step: Number(GeneralParams.priceStep),
  });

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    if (data.price) {
      const validPrice = getValidPrice(data.price);
      data.price = validPrice;
    }

    Object.entries(data).forEach(([key, value]: string[]) => {
      if (!value) return;

      updateSearchParams({ key, value: value.toLowerCase() });
      setShowBrandsList(false);
      setShowPricesList(false);
    });
  };

  const onToggleMenuBtnClick = ({
    e,
    name,
  }: IOnToggleMenuBtnClickProps): void => {
    if (name === SearchParamsKeys.brand) {
      setShowBrandsList((prevState) => !prevState);
    }

    if (name === SearchParamsKeys.price) {
      setShowPricesList((prevState) => !prevState);
    }
    makeBlur(e.currentTarget);
  };

  const onBrandClick = (e: MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const inputName = SearchParamsKeys.brand;
    setValue(inputName, value);
    setShowBrandsList(false);
  };

  const onPriceClick = (e: MouseEvent<HTMLInputElement>) => {
    const value = `${e.currentTarget.value}${GeneralParams.dollar}`;
    const inputName = SearchParamsKeys.price;
    setValue(inputName, value);
    setShowPricesList(false);
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
            onClick={(e) => {
              onToggleMenuBtnClick({ e, name: SearchParamsKeys.brand });
            }}
            showFiltersList={showBrandsList}
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
          <ToggleMenuBtn
            type='button'
            onClick={(e) => {
              onToggleMenuBtnClick({ e, name: SearchParamsKeys.price });
            }}
            showFiltersList={showPricesList}
          >
            <FaChevronDown size={IconSizes.otherSize} />
          </ToggleMenuBtn>
        </InputWrap>
        {showPricesList && priceList && (
          <FiltersList
            filters={priceList}
            name={SearchParamsKeys.price}
            action={onPriceClick}
            currentValue={priceInputValue}
          />
        )}
      </Label>
      <Button type='submit' onClick={onSubmitFormBtnClick}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
