import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { toasts } from 'utils';
import { selectCars } from '../redux/cars/selectors';
import CarsList from 'components/CarsList';

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);

  useEffect(() => {
    const promise = dispatch(fetchCars({}));
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
  }, [dispatch]);

  return cars && <CarsList cars={cars} />;
};

export default CatalogPage;
