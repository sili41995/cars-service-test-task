import { FC } from 'react';
import { IProps } from './CarDetails.types';
import CarTitle from 'components/CarTitle';
import { GeneralParams, theme } from 'constants/index';
import FunctionalitiesList from 'components/FunctionalitiesList';
import { getCarInfo } from 'utils';
import {
  Container,
  Description,
  Image,
  ImgWrap,
  Link,
  Title,
} from './CarDetails.styled';
import RentalConditions from 'components/RentalConditions';

const CarDetails: FC<IProps> = ({ car }) => {
  const { make, model, year, description, accessories, functionalities } = car;
  const { carImg, carImgDesc, detailsCharacteristics, rental } =
    getCarInfo(car);

  return (
    <>
      <ImgWrap>
        <Image src={carImg} alt={carImgDesc} />
      </ImgWrap>
      <CarTitle
        fontSize={theme.fontSize.secondaryFontSize}
        make={make}
        model={model}
        year={year}
      />
      <FunctionalitiesList functionalities={detailsCharacteristics} />
      <Description>{description}</Description>
      <Container>
        <Title>Accessories and functionalities:</Title>
        <FunctionalitiesList functionalities={[accessories, functionalities]} />
      </Container>
      <Container>
        <Title>Rental Conditions:</Title>
        <RentalConditions rentalConditions={rental} />
      </Container>
      <Link href={`tel:${GeneralParams.companyPhone}`}>Rental car</Link>
    </>
  );
};

export default CarDetails;
