import { Botao } from "../../components/Botao";
import { ButtonYesNo } from "../../components/ButtonYesNo";

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
  Input2,
  ContentDataHora,
} from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { createFood } from "../../components/storage/createFood";

export function NewSnack() {
  const [bordaVerde, setBordaVerde] = useState(false);
  const [bordaVermelha, setBordaVermelha] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dieta, setDieta] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [text, setText] = useState("");
  function clicouVerde() {
    setBordaVerde(true);
    setDieta(true);
    setBordaVermelha(false);
  }

  function clicouVermelho() {
    setBordaVerde(false);
    setDieta(false);
    setBordaVermelha(true);
  }
  const navigation = useNavigation();

  async function cadastrarFood() {
    if (!nome) {
      Alert.alert("Atenção", "Preencha ou marque todos os campos !");
      return;
    }
    if (!data) {
      Alert.alert("Atenção", "Preencha ou marque todos os campos !");
      return;
    }
    if (!hora) {
      Alert.alert("Atenção", "Preencha ou marque todos os campos !");
      return;
    }
    if (!descricao) {
      Alert.alert("Atenção", "Preencha ou marque todos os campos !");
      return;
    }
    if (!dieta) {
      Alert.alert("Atenção", "Preencha ou marque todos os campos !");
      return;
    }
    const novo = await createFood({
      data: data,
      nome: nome,
      hora: hora,
      descricao: descricao,
      dieta: dieta,
    });
    navigation.navigate("feedbacknewsnack", { dieta });
  }

  const handleInputChange = (inputText) => {
    if (inputText.length <= 170) {
      setText(inputText);
      setDescricao(inputText);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate("home")}>
          <BackIcon />
        </BackButton>
        <Title>{"Nova Refeição"}</Title>
      </Header>
      <Content>
        <Label>{"Nome"}</Label>
        <Input2 onChangeText={setNome} value={nome} />
        <Label>{"Descrição"}</Label>
        <Input2
          style={{ textAlignVertical: "top" }}
          multiline={true}
          numberOfLines={5}
          onChangeText={handleInputChange}
          value={descricao}
        />
        <Content2>
          <ContentDataHora style={{ marginRight: 10 }}>
            <Label>{"Data"}</Label>
            <Input
              placeholder="__.__.____"
              mask="99.99.9999"
              keyboardType="numeric"
              type={"date"}
              options={{ dateFormat: "DD.MM.YYYY" }}
              onChangeText={(text) => {
                setData(text);
              }}
              value={data}
            />
          </ContentDataHora>

          <ContentDataHora style={{ marginLeft: 10 }}>
            <Label>{"Hora"}</Label>
            <Input
              placeholder="__:__"
              keyboardType="numeric"
              mask="99:99"
              onChangeText={(text, rawtext) => {
                setHora(text);
              }}
              value={hora}
            />
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
      <Botao
        onPress={cadastrarFood}
        style={{ marginTop: 90 }}
        title={"Cadastrar Refeição"}
      />
    </Container>
  );
}
