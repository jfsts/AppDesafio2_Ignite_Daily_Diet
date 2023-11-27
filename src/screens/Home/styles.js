import styled from "styled-components/native";
import { Plus, ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: space-between;
`;

export const Logo = styled.Image`
  margin-top: 60px;
  margin-left: 15px;
`;
export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Foto = styled.Image`
  margin-top: 60px;
  margin-left: 15px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 20px;
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18,
}))``;

export const Icon2 = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  align-self: flex-end;
`;

export const ContentRetangular = styled.View`
  margin-top: 30px;
  align-self: flex-start;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  height: 100px;
  width: 92%;
  border-radius: 6px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 20px;
`;

export const Button = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const TouchButton = styled(TouchableOpacity)``;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-left: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ValoresCentro = styled.Text`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  justify-content: center;
  align-self: center;
`;

export const SubTitle2 = styled.Text`
  margin-top: 15px;
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ContentDescricao = styled.View`
  border-radius: 6px;
  padding: 12px 10px 12px 10px;
  align-items: center;
  align-self: stretch;
  border: 1px;
  border-color: #dddedf;
  flex-direction: row;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Horario = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const HorarioBarra = styled.Text`
  color: #dddedf;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Descricao = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Data = styled.Text`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContentParteDescricao = styled.View`
  flex: 1;
  flex-direction: row;
`;
