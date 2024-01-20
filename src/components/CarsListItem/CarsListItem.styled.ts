import styled from '@emotion/styled';
import { IStyledProps } from './CarsListItem.types';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: space-between;
  width: calc((100% - 87px) / 4);
  overflow: hidden;
`;

export const BasicInfoWrap = styled.div``;

export const DetailedInfoWrap = styled.div``;

export const ImgWrap = styled.div`
  position: relative;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const TitleWrap = styled.div`
  display: flex;
`;

export const Price = styled.p`
  margin-right: 9px;
  margin-left: auto;
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.5;
`;

export const Image = styled.img``;

export const FavBtn = styled.button<IStyledProps>`
  position: absolute;
  top: 14px;
  right: 14px;
  display: block;
  background-color: transparent;
  padding: 0;
  border: 0;
  &:is(:hover, :focus) svg {
    fill: ${({ theme, isFavCar }) =>
      isFavCar ? theme.colors.whiteColor : theme.colors.primaryColor};
  }
  & svg {
    display: block;
    fill: ${({ theme, isFavCar }) =>
      isFavCar ? theme.colors.primaryColor : theme.colors.whiteColor};
    transition: fill ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  border-radius: 12px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: ${({ theme }) => theme.spacing(7)};
  padding: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: Manrope;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: 1.43;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
