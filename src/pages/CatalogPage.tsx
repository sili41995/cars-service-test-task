import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { toasts } from 'utils';
import { selectCars } from '../redux/cars/selectors';
import CarsList from 'components/CarsList';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsKeys } from 'constants/index';
import LoadMoreBtn from 'components/LoadMoreBtn';

const CatalogPage: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';

  useEffect(() => {
    const pageNumber = Number.parseInt(page);
    const isNaN = Number.isNaN(pageNumber);

    if (isNaN) {
      return;
    }

    const promise = dispatch(fetchCars({ page }));
    promise
      .unwrap()
      .then(() => {
        toasts.successToast('Adverts loaded successfully');
      })
      .catch((error) => {
        toasts.errorToast(error);
      });

    return () => {
      promise.abort();
    };
  }, [dispatch, page]);

  return (
    cars && (
      <>
        <CarsList cars={cars} />
        <LoadMoreBtn disabled={false} />
      </>
    )
  );
};

export default CatalogPage;
