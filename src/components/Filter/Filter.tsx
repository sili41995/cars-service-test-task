import { GeneralParams, IconSizes, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from 'hooks/useSetSearchParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFilters, IOnMenuItemClick } from 'types/types';
import {
  Form,
  Input,
  InputWrap,
  Label,
  Prefix,
  Title,
  ToggleMenuBtn,
} from './Filter.styled';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {
  firstSymbolToUpperCase,
  getPriceList,
  getValidPrice,
  onToggleMenuBtnClick,
} from 'utils';
import brands from 'constants/makes.json';
import FiltersList from 'components/FiltersList/FiltersList';
import { useAppSelector } from 'hooks/redux';
import { selectCars } from '../../redux/cars/selectors';
import SubmitBtn from 'components/SubmitBtn';

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

  const onMenuItemClick = ({ e, name }: IOnMenuItemClick) => {
    let value = e.currentTarget.value;

    switch (name) {
      case SearchParamsKeys.price:
        value = `${value}${GeneralParams.dollar}`;
        setShowPricesList(false);
        break;

      case SearchParamsKeys.brand:
        setShowBrandsList(false);
        break;

      default:
        return;
    }

    setValue(name, value);
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
              onToggleMenuBtnClick({ e, setState: setShowBrandsList });
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
            menuHeight={272}
            action={(e) => {
              onMenuItemClick({ e, name: SearchParamsKeys.brand });
            }}
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
              onToggleMenuBtnClick({ e, setState: setShowPricesList });
            }}
            showFiltersList={showPricesList}
          >
            <FaChevronDown size={IconSizes.otherSize} />
          </ToggleMenuBtn>
        </InputWrap>
        {showPricesList && priceList && (
          <FiltersList
            filters={priceList}
            menuHeight={188}
            name={SearchParamsKeys.price}
            action={(e) => {
              onMenuItemClick({ e, name: SearchParamsKeys.price });
            }}
            currentValue={priceInputValue}
          />
        )}
      </Label>
      <SubmitBtn title='Search' />
    </Form>
  );
};

export default Filter;
