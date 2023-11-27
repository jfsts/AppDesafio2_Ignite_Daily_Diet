import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import theme from "./src/theme";

import { Loading } from "./src/components/Loading";
import { ViewSnack } from "./src/screens/ViewSnack";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
