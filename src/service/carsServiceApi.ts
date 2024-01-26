import { FetchParams } from 'constants/index';
import {
  ICar,
  IFetchCarProps,
  IFetchCarResponse,
  IFetchCarsProps,
} from 'types/types';

class CarsServiceApi {
  private BASE_URL = 'https://carservice-rest-api.onrender.com/api';

  fetchCars({
    page = FetchParams.page,
    limit,
    signal,
  }: IFetchCarsProps): Promise<IFetchCarResponse> {
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

  fetchCarById({ signal, id }: IFetchCarProps): Promise<ICar> {
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
