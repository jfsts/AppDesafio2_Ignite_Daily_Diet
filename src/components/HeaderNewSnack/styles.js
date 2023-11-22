import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 50px 30px 50px 30px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 25%;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_2,
  size: 24,
}))``;

export const Content = styled.View`
  flex: 1;
  padding: 30px;
  margin-top: -35px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: flex-start;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;
export const Content2 = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: space-evenly;
  align-items: center;
  text-align: left;
`;

export const ContentDataHora = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  width: 46%;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};

    color: ${theme.COLORS.GRAY_1};
    width: 100%;
    background-color: ${theme.COLORS.GRAY_7};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border-radius: 6px;
    padding: 14px;
    margin-bottom: 12px;
  `}
`;
