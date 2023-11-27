import {
  Container,
  Title,
  TitleConten2,
  Header,
  BackButton,
  BackIcon,
  SubTitle,
  SubTitle2,
  Content,
  Content2,
  ContentRetangular,
  Content3,
  ContentQuadrado,
  ValoresCentro,
} from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

export function Dashboard({ ...rest }) {
  const route = useRoute();
  const {
    percent,
    melhorSequencia,
    totaldeRefeicoes,
    quantidadeFalse,
    quantidadeTrue,
  } = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        style={
          percent < 50
            ? { backgroundColor: "#F4E6E7" }
            : { backgroundColor: "#E5F0DB" }
        }
      >
        <BackButton onPress={() => navigation.navigate("home")}>
          <BackIcon />
        </BackButton>

        <Content
          style={
            percent < 50
              ? { backgroundColor: "#F4E6E7" }
              : { backgroundColor: "#E5F0DB" }
          }
        >
          <Title>{`${percent.toString().replace(".", ",")}%`}</Title>
          <SubTitle>{"das refeições dentro da dieta"}</SubTitle>
        </Content>
      </Header>
      <Content2>
        <TitleConten2>{"Estatísticas gerais"}</TitleConten2>
        <ContentRetangular>
          <ValoresCentro>{melhorSequencia}</ValoresCentro>
          <SubTitle2>{"melhor sequência de pratos dentro da dieta"}</SubTitle2>
        </ContentRetangular>
        <ContentRetangular>
          <ValoresCentro>{totaldeRefeicoes}</ValoresCentro>
          <SubTitle2>{"refeições registradas"}</SubTitle2>
        </ContentRetangular>
        <Content3>
          <ContentQuadrado
            style={{ marginLeft: -15, backgroundColor: "#E5F0DB" }}
          >
            <ValoresCentro>{quantidadeTrue}</ValoresCentro>
            <SubTitle2>{"refeições dentro da dieta"}</SubTitle2>
          </ContentQuadrado>
          <ContentQuadrado
            style={{ marginRight: -15, backgroundColor: "#F4E6E7" }}
          >
            <ValoresCentro>{quantidadeFalse}</ValoresCentro>
            <SubTitle2>{"refeições fora da dieta"}</SubTitle2>
          </ContentQuadrado>
        </Content3>
      </Content2>
    </Container>
  );
}
