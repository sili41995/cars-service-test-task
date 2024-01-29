import { useAppDispatch } from 'hooks/redux';
import { FC, useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { toasts } from 'utils';
import CarsList from 'components/CarsList';
import { FetchParams, Messages, SearchParamsKeys } from 'constants/index';
import DefaultMessage from 'components/DefaultMessage';
import Filter from 'components/Filter';
import PaginationBar from 'components/PaginationBar';
import Loader from 'components/Loader';
import { useFilteredCars, useGlobalState, useSetSearchParams } from 'hooks';

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const { searchParams } = useSetSearchParams();
  const { cars, count, isLoading } = useGlobalState();
  const filteredCars = useFilteredCars();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';
  const shouldShowControls = Boolean(cars?.length) && count;
  const shouldShowLoader = isLoading && !cars;

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

  return shouldShowLoader ? (
    <Loader />
  ) : (
    <>
      {shouldShowControls && <Filter />}
      {filteredCars?.length ? (
        <CarsList cars={filteredCars} />
      ) : (
        <DefaultMessage message={Messages.emptyList} />
      )}
      {shouldShowControls && (
        <PaginationBar
          quantity={Number(FetchParams.limit)}
          itemsQuantity={count}
        />
      )}
    </>
  );
};

export default CatalogPage;
