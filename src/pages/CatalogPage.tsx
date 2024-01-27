import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect, useMemo } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { filterCarsByBrand, filterCarsByPrice, toasts } from 'utils';
import {
  selectCars,
  selectCount,
  selectIsLoading,
} from '../redux/cars/selectors';
import CarsList from 'components/CarsList';
import { useSearchParams } from 'react-router-dom';
import { FetchParams, Messages, SearchParamsKeys } from 'constants/index';
import DefaultMessage from 'components/DefaultMessage';
import Filter from 'components/Filter';
import PaginationBar from 'components/PaginationBar';
import Loader from 'components/Loader';

const CatalogPage: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);
  const count = useAppSelector(selectCount);
  const isLoading = useAppSelector(selectIsLoading);
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';
  const shouldShowControls = Boolean(cars?.length) && count;
  const shouldShowLoader = isLoading && !cars;

  const filteredCars = useMemo(() => {
    if (!cars) {
      return;
    }

    const filteredCarsByBrand = filterCarsByBrand({ cars, filter: brand });
    const filteredCarsByPrice = filterCarsByPrice({
      cars: filteredCarsByBrand,
      filter: price,
    });

    return filteredCarsByPrice;
  }, [brand, cars, price]);

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
