import { FC } from 'react';
import { IProps } from './CarsListItem.types';
import { getCarInfo } from 'utils';
import { Card, Image, ImgWrap, LearnMoreBtn } from './CarsListItem.styled';
import CharacteristicsList from 'components/CharacteristicsList';

const CarsListItem: FC<IProps> = ({ car }) => {
  const { make, model, year, rentalPrice } = car;

  const { carCharacteristics, carImg, carImgDesc, otherCarCharacteristics } =
    getCarInfo(car);

  return (
    <Card>
      <ImgWrap>
        <Image src={carImg} alt={carImgDesc} />
      </ImgWrap>
      <p>
        {`${make} `}
        <span>{model}</span>
        {`, ${year}`}
      </p>
      <p>{rentalPrice}</p>
      <CharacteristicsList characteristics={carCharacteristics} />
      <CharacteristicsList characteristics={otherCarCharacteristics} />
      <LearnMoreBtn type='button'>Learn more</LearnMoreBtn>
    </Card>
  );
};

export default CarsListItem;
