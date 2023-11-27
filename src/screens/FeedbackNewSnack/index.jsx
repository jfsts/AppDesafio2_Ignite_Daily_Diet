import {
  Container,
  Title,
  SubTitle,
  Span,
  TitleOK,
  Imagem,
  Button,
  TitleButton,
} from "./styles";
import imagemSucesso from "../../assets/imagemSucesso.png";
import imagemQuePena from "../../assets/imagemQuePena.png";
import { useRoute, useNavigation } from "@react-navigation/native";

export function FeedbackNewSnack() {
  const route = useRoute();
  const navigation = useNavigation();

  const { dieta } = route.params;
  return (
    <Container>
      {!dieta ? (
        <>
          <Title>{"Que pena!"}</Title>
          <SubTitle>
            {"Você "} <Span>{"saiu da dieta"}</Span>
            {" dessa vez, mas continue se esforçando e não desista!"}
          </SubTitle>
          <Imagem source={imagemQuePena}></Imagem>
        </>
      ) : (
        <>
          <TitleOK>{"Continue assim !"}</TitleOK>
          <SubTitle>
            {"Você continua "} <Span>{"dentro da dieta."}</Span>
            {" Muito bem!"}
          </SubTitle>
          <Imagem source={imagemSucesso}></Imagem>
        </>
      )}
      <Button onPress={() => navigation.navigate("home")}>
        <TitleButton>{"Ir para tela inicial"}</TitleButton>
      </Button>
    </Container>
  );
}
