import { IUpdateSearchParamsProps } from 'types/types';

const updateSearchParams = ({
  searchParams,
  setSearchParams,
  key,
  value,
}: IUpdateSearchParamsProps): void => {
  searchParams.set(key, value);
  setSearchParams(searchParams);
};

export default updateSearchParams;
