import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity, Modal, Pressable } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 90px 30px 90px 30px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 30%;
  align-self: center;
  margin-top: -40px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: -40px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_2,
  size: 24,
}))``;

export const Content = styled.View`
  padding: 30px;
  margin-top: -50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: flex-start;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const Label = styled.Text`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Label2 = styled.Text`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Tag = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Content2 = styled.View`
  flex-direction: row;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 8px 16px;
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 15px;
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

export const ModalModelo = styled(Modal)``;

export const ModalView = styled.View`
  margin-top: 20%;
  width: 327px;
  background-color: #fafafa;
  padding: 40px 21px 24px 24px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
`;

export const TextoModal = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalViewButton = styled.View`
  flex-direction: row;
  margin: 10px;
  background-color: #fafafa;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const TitleButtonModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const TitleButtonModal2 = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ButtonModal = styled(Pressable)`
  width: 50%;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonModal2 = styled(Pressable)`
  margin-right: 20px;
  width: 50%;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border: 1px #1b1d1e;
`;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
