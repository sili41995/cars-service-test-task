import { FC, MouseEvent } from 'react';
import { IProps } from './LoadMoreBtn.types';
import { Button } from './LoadMoreBtn.styled';
import updateSearchParams from 'utils/updateSearchParams';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsKeys } from 'constants/index';
import { makeBlur } from 'utils';

const LoadMoreBtn: FC<IProps> = ({ disabled }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';

  const onLoadMoreBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = String(Number(page) + 1);

    updateSearchParams({
      searchParams,
      setSearchParams,
      key: SearchParamsKeys.page,
      value,
    });

    makeBlur(e.currentTarget);
  };

  return (
    <Button type='button' disabled={disabled} onClick={onLoadMoreBtnClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
