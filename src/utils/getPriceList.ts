import { IGetPriceListProps } from 'types/types';
import getValidPrice from './getValidPrice';

const getPriceList = ({ cars, step }: IGetPriceListProps): string[] | null => {
  if (!cars) {
    return cars;
  }

  const prices = cars.map(({ rentalPrice }) => {
    const price = getValidPrice(rentalPrice);
    return Number(price);
  });
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceList: string[] = [];
  let price = 0;

  while (price <= maxPrice) {
    if (price >= minPrice) {
      priceList.push(String(price));
    }

    price += step;
  }

  return priceList;
};

export default getPriceList;
