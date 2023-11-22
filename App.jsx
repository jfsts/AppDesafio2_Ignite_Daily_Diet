import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import theme from "./src/theme";
import { FeedbackNewSnack } from "./src/screens/FeedbackNewSnack";
import { Loading } from "./src/components/Loading";
import { HeaderNewSnack } from "./src/components/HeaderNewSnack";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <HeaderNewSnack /> : <Loading />}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
