import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect, useMemo } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { filterCarsByBrand, filterCarsByPrice, toasts } from 'utils';
import { selectCars, selectCount } from '../redux/cars/selectors';
import CarsList from 'components/CarsList';
import { useSearchParams } from 'react-router-dom';
import { FetchParams, Messages, SearchParamsKeys } from 'constants/index';
import DefaultMessage from 'components/DefaultMessage';
import Filter from 'components/Filter';
import PaginationBar from 'components/PaginationBar';

const CatalogPage: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);
  const count = useAppSelector(selectCount);
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';
  const brand = searchParams.get(SearchParamsKeys.brand) ?? '';
  const price = searchParams.get(SearchParamsKeys.price) ?? '';

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

  const shouldRenderList = cars && filteredCars && count;

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

  return (
    <>
      <Filter />
      {shouldRenderList ? (
        <>
          <CarsList cars={filteredCars} />
          <PaginationBar
            quantity={Number(FetchParams.limit)}
            itemsQuantity={count}
          />
        </>
      ) : (
        <DefaultMessage message={Messages.emptyList} />
      )}
    </>
  );
};

export default CatalogPage;
