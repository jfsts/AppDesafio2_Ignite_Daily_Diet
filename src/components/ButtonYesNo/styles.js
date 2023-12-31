import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  width: 48%;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  align-self: center;
  margin-left: -5px;
`;
