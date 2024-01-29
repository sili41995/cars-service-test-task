import {
  selectCars,
  selectCount,
  selectIsLoading,
} from '../redux/cars/selectors';
import { useAppSelector } from './redux';

const useGlobalState = () => {
  const cars = useAppSelector(selectCars);
  const count = useAppSelector(selectCount);
  const isLoading = useAppSelector(selectIsLoading);

  return { cars, count, isLoading };
};

export default useGlobalState;
