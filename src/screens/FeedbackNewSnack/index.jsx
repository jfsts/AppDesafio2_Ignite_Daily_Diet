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

export function FeedbackNewSnack({ tipo }) {
  return (
    <Container>
      {tipo === "saiu" ? (
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
      <Button>
        <TitleButton>{"Ir para tela inicial"}</TitleButton>
      </Button>
    </Container>
  );
}
