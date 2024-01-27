import { GeneralParams, IconSizes, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from 'hooks/useSetSearchParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFilters, IOnMenuItemClick } from 'types/types';
import { Form } from './Filter.styled';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {
  firstSymbolToUpperCase,
  getPriceList,
  getValidPrice,
  onToggleMenuBtnClick,
} from 'utils';
import brands from 'constants/makes.json';
import { useAppSelector } from 'hooks/redux';
import { selectCars } from '../../redux/cars/selectors';
import SubmitBtn from 'components/SubmitBtn';
import FilterItem from 'components/FilterItem/FilterItem';
import FiltersList from 'components/FiltersList';

const Filter = () => {
  const [showBrandsList, setShowBrandsList] = useState<boolean>(false);
  const [showPricesList, setShowPricesList] = useState<boolean>(false);
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const cars = useAppSelector(selectCars);
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const { register, handleSubmit, setValue, watch } = useForm<IFilters>();
  const brandInputValue = watch(SearchParamsKeys.brand);
  const priceInputValue = watch(SearchParamsKeys.price);
  const brandDefaultValue = firstSymbolToUpperCase(brand);
  const priceDefaultValue = `${price}${GeneralParams.dollar}`;
  const priceList = getPriceList({
    cars,
    step: Number(GeneralParams.priceStep),
  });
  const toggleMenuBtnIcon = <FaChevronDown size={IconSizes.otherSize} />;

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    if (data.price) {
      const validPrice = getValidPrice(data.price);
      data.price = validPrice;
    }

    Object.entries(data).forEach(([key, value]: string[]) => {
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
      <FilterItem
        inputSettings={{ ...register(SearchParamsKeys.brand) }}
        title='Car brand'
        placeholder='Enter the text'
        defaultValue={brandDefaultValue}
        menuBtnIcon={toggleMenuBtnIcon}
        showMenu={showBrandsList}
        onMenuBtnClick={(e) => {
          onToggleMenuBtnClick({ e, setState: setShowBrandsList });
        }}
      >
        <FiltersList
          filters={brands}
          name={SearchParamsKeys.brand}
          action={(e) => {
            onMenuItemClick({ e, name: SearchParamsKeys.brand });
          }}
          currentValue={brandInputValue}
        />
      </FilterItem>
      <FilterItem
        inputSettings={{ ...register(SearchParamsKeys.price) }}
        title='Price/ 1 hour'
        placeholder={String(GeneralParams.dollar)}
        prefix='To'
        leftDistance={18}
        defaultValue={priceDefaultValue}
        menuBtnIcon={toggleMenuBtnIcon}
        showMenu={showPricesList}
        onMenuBtnClick={(e) => {
          onToggleMenuBtnClick({ e, setState: setShowPricesList });
        }}
      >
        {priceList && (
          <FiltersList
            filters={priceList}
            name={SearchParamsKeys.price}
            action={(e) => {
              onMenuItemClick({ e, name: SearchParamsKeys.price });
            }}
            currentValue={priceInputValue}
          />
        )}
      </FilterItem>
      <SubmitBtn title='Search' />
    </Form>
  );
};

export default Filter;
