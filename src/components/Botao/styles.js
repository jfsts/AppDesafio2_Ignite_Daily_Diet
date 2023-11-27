import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)`
  flex: 1;
  width: 95%;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
