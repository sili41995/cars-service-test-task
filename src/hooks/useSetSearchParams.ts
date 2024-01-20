import { useSearchParams } from 'react-router-dom';
import { IUpdateSearchParamsProps, IUseSetSearchParams } from 'types/types';

const useSetSearchParams = (): IUseSetSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = ({
    key,
    value,
  }: IUpdateSearchParamsProps): void => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  return { updateSearchParams, searchParams, setSearchParams };
};

export default useSetSearchParams;
