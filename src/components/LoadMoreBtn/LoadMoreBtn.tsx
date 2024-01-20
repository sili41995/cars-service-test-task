import { FC, MouseEvent } from 'react';
import { IProps } from './LoadMoreBtn.types';
import { Button } from './LoadMoreBtn.styled';
import { SearchParamsKeys } from 'constants/index';
import { makeBlur } from 'utils';
import useSetSearchParams from 'hooks/useSetSearchParams';

const LoadMoreBtn: FC<IProps> = ({ disabled }) => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';

  const onLoadMoreBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = String(Number(page) + 1);
    updateSearchParams({ key: SearchParamsKeys.page, value });
    makeBlur(e.currentTarget);
  };

  return (
    <Button type='button' disabled={disabled} onClick={onLoadMoreBtnClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
