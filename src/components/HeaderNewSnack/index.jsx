import { ButtonYesNo } from "../ButtonYesNo";
import {
  Container,
  Title,
  BackButton,
  BackIcon,
  Content,
  Header,
  Label,
  Input,
  Content2,
  ContentDataHora,
} from "./styles";
import { useState } from "react";

export function HeaderNewSnack() {
  const [bordaVerde, setBordaVerde] = useState(false);
  const [bordaVermelha, setBordaVermelha] = useState(false);

  function clicouVerde() {
    console.log("Clicou em Verde");
    setBordaVerde(true);
    setBordaVermelha(false);
  }

  function clicouVermelho() {
    console.log("Clicou em Vermelho");
    setBordaVerde(false);
    setBordaVermelha(true);
  }

  return (
    <Container>
      <Header>
        <BackButton>
          <BackIcon />
        </BackButton>
        <Title>{"Nova Refeição"}</Title>
      </Header>
      <Content>
        <Label>{"Nome"}</Label>
        <Input />
        <Label>{"Descrição"}</Label>
        <Input
          style={{ textAlignVertical: "top" }}
          multiline={true}
          numberOfLines={5}
        />
        <Content2>
          <ContentDataHora style={{ marginRight: 10 }}>
            <Label>{"Data"}</Label>
            <Input />
          </ContentDataHora>

          <ContentDataHora style={{ marginLeft: 10 }}>
            <Label>{"Hora"}</Label>
            <Input />
          </ContentDataHora>
        </Content2>
        <Label>{"Está dentro da dieta?"}</Label>
        <Content2>
          <ButtonYesNo
            onPress={clicouVerde}
            border={bordaVerde}
            title={"Sim"}
          />
          <ButtonYesNo
            onPress={clicouVermelho}
            border={bordaVermelha}
            title={"Não"}
          />
        </Content2>
      </Content>
    </Container>
  );
}
