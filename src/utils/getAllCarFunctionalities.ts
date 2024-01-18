import { ICar } from 'types/types';

const getAllCarFunctionalities = ({
  functionalities,
  accessories,
}: ICar): string[] =>
  [...functionalities, ...accessories].sort(
    (item, nextItem) => item.length - nextItem.length
  );

export default getAllCarFunctionalities;
