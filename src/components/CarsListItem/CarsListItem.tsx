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
  Price,
  TitleWrap,
} from './CarsListItem.styled';
import { AriaLabels, IconSizes, theme } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { changeFavList } from '../../redux/favoritesCars/favoritesCarsSlice';
import { selectFavoritesCarsId } from '../../redux/favoritesCars/selectors';
import ModalWin from 'components/ModalWin/ModalWin';
import CarDetails from 'components/CarDetails';
import CarTitle from 'components/CarTitle';
import FunctionalitiesList from 'components/FunctionalitiesList';

const CarsListItem: FC<IProps> = ({ car }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { rentalPrice, _id, make, model, year } = car;
  const dispatch = useAppDispatch();
  const favoritesCars = useAppSelector(selectFavoritesCarsId);
  const isFavCar = favoritesCars?.includes(_id);
  const favBtnIcon = isFavCar ? (
    <FaHeart size={IconSizes.primarySize} />
  ) : (
    <FaRegHeart size={IconSizes.primarySize} />
  );

  const { carImg, carImgDesc, functionalities } = getCarInfo(car);

  const onFavBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(changeFavList(_id));
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
            <CarTitle
              fontSize={theme.fontSize.titleFontSize}
              make={make}
              model={model}
              year={year}
            />
            <Price>{rentalPrice}</Price>
          </TitleWrap>
        </BasicInfoWrap>
        <DetailedInfoWrap>
          <FunctionalitiesList functionalities={functionalities} />
          <LearnMoreBtn type='button' onClick={onLearnMoreBtnClick}>
            Learn more
          </LearnMoreBtn>
        </DetailedInfoWrap>
      </Card>
      {showModal && (
        <ModalWin setModalWinState={toggleShowModal}>
          <CarDetails car={car} />
        </ModalWin>
      )}
    </>
  );
};

export default CarsListItem;
