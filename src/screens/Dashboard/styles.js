import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 90px 30px 90px 30px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: -90px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_2,
  size: 24,
}))``;

export const Content2 = styled.View`
  flex: 1;
  padding: 30px;
  margin-top: -60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: flex-start;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const TitleConten2 = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  justify-content: center;
  align-self: center;
  margin-top: -80px;
  margin-bottom: 20px;
`;

export const ContentRetangular = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  width: 100%;
  height: 18%;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Content3 = styled.View`
  padding: 16px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  width: 100%;
  height: 25%;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContentQuadrado = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  width: 50%;
  height: 100%;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ValoresCentro = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  justify-content: center;
  align-self: center;
`;

export const SubTitle2 = styled.Text`
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
