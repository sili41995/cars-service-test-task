import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { toasts } from 'utils';
import { selectCars, selectIsLastPage } from '../redux/cars/selectors';
import CarsList from 'components/CarsList';
import { useSearchParams } from 'react-router-dom';
import { FetchParams, Messages, SearchParamsKeys } from 'constants/index';
import LoadMoreBtn from 'components/LoadMoreBtn';
import DefaultMessage from 'components/DefaultMessage';

const CatalogPage: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);
  const isLastPage = useAppSelector(selectIsLastPage);
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';

  useEffect(() => {
    const pageNumber = Number.parseInt(page);
    const isNaN = Number.isNaN(pageNumber);

    if (isNaN) {
      return;
    }

    const promise = dispatch(fetchCars({ page, limit: FetchParams.limit }));
    promise
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.loadedSuccess);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });

    return () => {
      promise.abort();
    };
  }, [dispatch, page]);

  return cars?.length ? (
    <>
      <CarsList cars={cars} />
      <LoadMoreBtn disabled={isLastPage} />
    </>
  ) : (
    <DefaultMessage message={Messages.emptyList} />
  );
};

export default CatalogPage;
