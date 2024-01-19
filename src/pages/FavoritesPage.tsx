import { useAppSelector } from 'hooks/redux';
import { FC, useEffect, useState } from 'react';
import { selectFavoritesCarsId } from '../redux/favoritesCars/selectors';
import { ICar } from 'types/types';
import carsServiceApi from 'service/carsServiceApi';
import CarsList from 'components/CarsList';
import { FetchStatuses } from 'constants/index';
import { toasts } from 'utils';
import Loader from 'components/Loader';
import DefaultMessage from 'components/DefaultMessage';

const FavoritesPage: FC = () => {
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [fetchCarsStatus, setFetchCarsStatus] = useState<FetchStatuses>(
    () => FetchStatuses.idle
  );
  const favoritesCarsId = useAppSelector(selectFavoritesCarsId);

  useEffect(() => {
    const abortController = new AbortController();

    const getFavoritesCars = async (id: string[]): Promise<void> => {
      try {
        setFetchCarsStatus(FetchStatuses.pending);
        const favoritesCarsPromise: Promise<ICar>[] = id.map((id) =>
          carsServiceApi.fetchCarById({ id, signal: abortController.signal })
        );
        const fetchResult: PromiseSettledResult<ICar>[] =
          await Promise.allSettled(favoritesCarsPromise);
        const isFailedResult: boolean = fetchResult.every(
          (item) =>
            item.status === 'rejected' && item.reason.name !== 'AbortError'
        );

        if (isFailedResult) {
          throw new Error('Fetch advert failed');
        }

        const favoritesCars: PromiseFulfilledResult<ICar>[] =
          fetchResult.filter(
            ({ status }) => status === 'fulfilled'
          ) as PromiseFulfilledResult<ICar>[];
        const result: ICar[] = favoritesCars.map((item) => item.value);
        setCars(result);
        setFetchCarsStatus(FetchStatuses.resolved);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }

        setFetchCarsStatus(FetchStatuses.rejected);
      }
    };

    favoritesCarsId && getFavoritesCars(favoritesCarsId);

    return () => {
      abortController.abort();
    };
  }, [favoritesCarsId]);

  return (
    <>
      {fetchCarsStatus === FetchStatuses.pending && <Loader />}
      {cars && cars.length ? (
        <CarsList cars={cars} />
      ) : (
        <DefaultMessage message='Adverts list is empty' />
      )}
    </>
  );
};

export default FavoritesPage;
