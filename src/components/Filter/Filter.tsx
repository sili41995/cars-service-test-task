import { GeneralParams, IconSizes, SearchParamsKeys } from 'constants/index';
import useSetSearchParams from 'hooks/useSetSearchParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFilters, IOnMenuItemClick } from 'types/types';
import { Form, InputGroup } from './Filter.styled';
import { FormEvent, useState } from 'react';
import {
  addDelimiterToInputValue,
  getPriceList,
  getValidPrice,
  getValueWithoutDelimiter,
  onToggleMenuBtnClick,
} from 'utils';
import brands from 'constants/makes.json';
import { useAppSelector } from 'hooks/redux';
import { selectCars } from '../../redux/cars/selectors';
import SubmitBtn from 'components/SubmitBtn';
import FilterItem from 'components/FilterItem/FilterItem';
import FiltersList from 'components/FiltersList';
import { FaChevronDown } from 'react-icons/fa';
import { useFilterValues } from 'hooks';

const Filter = () => {
  const [showBrandsList, setShowBrandsList] = useState<boolean>(false);
  const [showPricesList, setShowPricesList] = useState<boolean>(false);
  const { updateSearchParams } = useSetSearchParams();
  const cars = useAppSelector(selectCars);
  const { brandDefaultValue, priceDefaultValue, mileageDefaultValue } =
    useFilterValues();
  const { register, handleSubmit, setValue, watch } = useForm<IFilters>();
  const priceList = getPriceList({
    cars,
    step: Number(GeneralParams.priceStep),
  });
  const brandInputValue = watch(SearchParamsKeys.brand);
  const priceInputValue = watch(SearchParamsKeys.price);

  const onSubmitForm: SubmitHandler<IFilters> = (data) => {
    const validPrice = getValidPrice(data.price);
    const validMileageFrom = getValueWithoutDelimiter({
      value: data.mileageFrom,
      delimiter: String(GeneralParams.comma),
    });
    data.price = validPrice;
    data.mileageFrom = validMileageFrom;

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

  const onMileageInputChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const delimiter = String(GeneralParams.comma);
    const position = Number(GeneralParams.maxNumLength);
    const updateValue = addDelimiterToInputValue({
      value,
      delimiter,
      position,
    });

    setValue(SearchParamsKeys.mileageFrom, updateValue);
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
          defaultValue={mileageDefaultValue}
          leftDistance={24}
          onChange={onMileageInputChange}
        />
      </InputGroup>
      <SubmitBtn title='Search' />
    </Form>
  );
};

export default Filter;
