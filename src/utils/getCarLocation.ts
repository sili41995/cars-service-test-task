const getCarLocation = (address: string): string[] =>
  address.split(', ').slice(1);

export default getCarLocation;
