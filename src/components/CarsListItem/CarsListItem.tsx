import { FC, MouseEvent, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IProps } from './CarsListItem.types';
import { getCarInfo, makeBlur } from 'utils';
import {
  BasicInfoWrap,
  Card,
  DetailedInfoWrap,
  FavBtn,
  Image,
  ImgWrap,
  LearnMoreBtn,
  Model,
  Price,
  Title,
  TitleWrap,
} from './CarsListItem.styled';
import CharacteristicsList from 'components/CharacteristicsList';
import { AriaLabels, IconSizes } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { changeFavList } from '../../redux/favoritesCars/favoritesCarsSlice';
import { selectFavoritesCarsId } from '../../redux/favoritesCars/selectors';
import ModalWin from 'components/Modal/ModalWin';

const CarsListItem: FC<IProps> = ({ car }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { make, model, year, rentalPrice, id } = car;
  const dispatch = useAppDispatch();
  const favoritesCars = useAppSelector(selectFavoritesCarsId);
  const isFavCar = favoritesCars?.includes(id);
  const favBtnIcon = isFavCar ? (
    <FaHeart size={IconSizes.primarySize} />
  ) : (
    <FaRegHeart size={IconSizes.primarySize} />
  );

  const { carCharacteristics, carImg, carImgDesc, otherCarCharacteristics } =
    getCarInfo(car);

  const onFavBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(changeFavList(id));
    makeBlur(e.currentTarget);
  };

  const toggleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const onLearnMoreBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleShowModal();
    makeBlur(e.currentTarget);
  };

  return (
    <>
      <Card>
        <BasicInfoWrap>
          <ImgWrap>
            <Image src={carImg} alt={carImgDesc} />
            <FavBtn
              type='button'
              onClick={onFavBtnClick}
              isFavCar={isFavCar}
              aria-label={AriaLabels.favBtn}
            >
              {favBtnIcon}
            </FavBtn>
          </ImgWrap>
          <TitleWrap>
            <Title>
              {`${make} `}
              <Model>{model}</Model>
              {`, ${year}`}
            </Title>
            <Price>{rentalPrice}</Price>
          </TitleWrap>
        </BasicInfoWrap>
        <DetailedInfoWrap>
          <CharacteristicsList characteristics={carCharacteristics} />
          <CharacteristicsList characteristics={otherCarCharacteristics} />
          <LearnMoreBtn type='button' onClick={onLearnMoreBtnClick}>
            Learn more
          </LearnMoreBtn>
        </DetailedInfoWrap>
      </Card>
      {showModal && <ModalWin setModalWinState={toggleShowModal} data={car} />}
    </>
  );
};

export default CarsListItem;
