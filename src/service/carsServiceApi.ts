import { IFetchCarProps, IFetchCarsProps } from 'types/types';

class CarsServiceApi {
  private BASE_URL = 'https://648c40eb8620b8bae7ec8cc7.mockapi.io/cars';

  fetchCars({ page = '1', limit = '12', signal }: IFetchCarsProps) {
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
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchCarById({ signal, id }: IFetchCarProps) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/adverts/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }
}

const carsServiceApi = new CarsServiceApi();

export default carsServiceApi;
