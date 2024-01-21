import { SearchParamsKeys } from 'constants/index';
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
} from './Filter.styled';
import { useEffect } from 'react';

const Filter = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFilters>();

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      if (!value) return;

      updateSearchParams({ key, value });
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Title>Car brand</Title>

        <Input
          type='text'
          placeholder='Enter the text'
          defaultValue={brand}
          {...register(SearchParamsKeys.brand)}
        />
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
          />
        </InputWrap>
      </Label>
      <Button type='submit'>Search</Button>
    </Form>
  );
};

export default Filter;
