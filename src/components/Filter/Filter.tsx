import { GeneralParams, IconSizes, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from 'hooks/useSetSearchParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFilters, IOnMenuItemClick } from 'types/types';
import { Form, InputGroup } from './Filter.styled';
import { FormEvent, useState } from 'react';
import {
  addDelimiterToInputValue,
  getMakes,
  getPriceList,
  getValidFormValues,
  onToggleMenuBtnClick,
} from 'utils';
import { useAppSelector } from 'hooks/redux';
import { selectCars } from '../../redux/cars/selectors';
import SubmitBtn from 'components/SubmitBtn';
import FilterItem from 'components/FilterItem';
import FiltersList from 'components/FiltersList';
import { FaChevronDown } from 'react-icons/fa';
import { useFilterValues } from 'hooks';

const Filter = () => {
  const [showBrandsList, setShowBrandsList] = useState<boolean>(false);
  const [showPricesList, setShowPricesList] = useState<boolean>(false);
  const { updateSearchParams } = useSetSearchParams();
  const cars = useAppSelector(selectCars);
  const {
    brandDefaultValue,
    priceDefaultValue,
    mileageFromDefaultValue,
    mileageToDefaultValue,
  } = useFilterValues();
  const { register, handleSubmit, setValue, watch } = useForm<IFilters>();
  const brandInputValue = watch(SearchParamsKeys.brand);
  const priceInputValue = watch(SearchParamsKeys.price);
  const makes = getMakes(cars);
  const priceList = getPriceList({
    cars,
    step: Number(GeneralParams.priceStep),
  });

  const onSubmitForm: SubmitHandler<IFilters> = (data) => {
    const { price, mileageFrom, mileageTo } = getValidFormValues(data);
    data.price = price;
    data.mileageFrom = mileageFrom;
    data.mileageTo = mileageTo;

    Object.entries(data).forEach(([key, value]: string[]) => {
      updateSearchParams({ key, value: value.toLowerCase() });
    });

    setShowBrandsList(false);
    setShowPricesList(false);
  };

  const onMenuItemClick = ({ e, name }: IOnMenuItemClick) => {
    let value = e.currentTarget.value;

    switch (name) {
      case SearchParamsKeys.price:
        value = value && `${value}${GeneralParams.dollar}`;
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

  const onBrandInputChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      setShowBrandsList(true);
    } else {
      setShowBrandsList(false);
    }
  };

  const onMileageInputChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const delimiter = String(GeneralParams.comma);
    const position = Number(GeneralParams.maxNumLength);
    const updateValue = addDelimiterToInputValue({
      value,
      delimiter,
      position,
    });
    const mileageFromInputName = SearchParamsKeys.mileageFrom;
    const mileageToInputName = SearchParamsKeys.mileageTo;

    if (e.currentTarget.name === mileageFromInputName) {
      setValue(mileageFromInputName, updateValue);
    }

    if (e.currentTarget.name === mileageToInputName) {
      setValue(mileageToInputName, updateValue);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <FilterItem
        inputSettings={{ ...register(SearchParamsKeys.brand) }}
        title='Car brand'
        placeholder='Enter the text'
        defaultValue={brandDefaultValue}
        showMenu={showBrandsList}
        toggleMenuBtn={<FaChevronDown size={IconSizes.otherSize} />}
        onChange={onBrandInputChange}
        onMenuBtnClick={(e) => {
          onToggleMenuBtnClick({ e, setState: setShowBrandsList });
        }}
      >
        <FiltersList
          filters={makes}
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
        showMenu={showPricesList}
        toggleMenuBtn={<FaChevronDown size={IconSizes.otherSize} />}
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
      <InputGroup>
        <FilterItem
          inputSettings={{ ...register(SearchParamsKeys.mileageFrom) }}
          title='Сar mileage / km'
          prefix='From'
          defaultValue={mileageFromDefaultValue}
          leftDistance={24}
          onChange={onMileageInputChange}
        />
        <FilterItem
          inputSettings={{ ...register(SearchParamsKeys.mileageTo) }}
          prefix='To'
          defaultValue={mileageToDefaultValue}
          leftDistance={24}
          onChange={onMileageInputChange}
        />
      </InputGroup>
      <SubmitBtn title='Search' />
    </Form>
  );
};

export default Filter;
