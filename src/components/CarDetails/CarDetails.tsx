import { FC } from 'react';
import { IProps } from './CarDetails.types';
import CarTitle from 'components/CarTitle';
import { theme } from 'constants/index';
import FunctionalitiesList from 'components/FunctionalitiesList';
import { getCarInfo } from 'utils';
import RentalConditions from 'components/RentalConditions';

const CarDetails: FC<IProps> = ({ car }) => {
  const { make, model, year } = car;
  const { functionalities } = getCarInfo(car);

  return (
    <>
      <div>
        <img src='' alt='' />
      </div>
      <CarTitle
        fontSize={theme.fontSize.secondaryFontSize}
        make={make}
        model={model}
        year={year}
      />
      <div>
        <p>Accessories and functionalities:</p>
        <FunctionalitiesList functionalities={functionalities} />
      </div>
      <div>
        <p>Rental Conditions:</p>
        <RentalConditions />
      </div>
    </>
  );
};

export default CarDetails;
