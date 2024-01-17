import { ICar, IFetchCarProps, IFetchCarsProps } from 'types/types';

class CarsServiceApi {
  private BASE_URL = 'https://648c40eb8620b8bae7ec8cc7.mockapi.io/cars';

  fetchCars({
    page = '1',
    limit = '12',
    signal,
  }: IFetchCarsProps): Promise<ICar[]> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(
      `${this.BASE_URL}/adverts?page=${page}&limit=${limit}`,
      options
    ).then((response) => {
      if (!response.ok) {
        throw Error('Fetch adverts failed');
      }

      return response.json();
    });
  }

  fetchCarById({ signal, id }: IFetchCarProps): Promise<ICar> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/adverts/${id}`, options).then((response) => {
      if (!response.ok) {
        throw Error('Fetch advert failed');
      }

      return response.json();
    });
  }
}

const carsServiceApi = new CarsServiceApi();

export default carsServiceApi;
