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

  for (let price = minPrice; price <= maxPrice; price += step) {
    priceList.push(String(price));
  }

  return priceList;
};

export default getPriceList;
