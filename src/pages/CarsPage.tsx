import { useAppDispatch } from 'hooks/redux';
import { useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';

const CarsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchCars({}));

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return <div>CarsPage</div>;
};

export default CarsPage;
