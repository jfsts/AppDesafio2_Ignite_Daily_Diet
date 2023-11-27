import {
  Container,
  Logo,
  Foto,
  ContentRetangular,
  Content,
  Icon,
  Button,
  TitleButton,
  Subtitle,
  Icon2,
  ValoresCentro,
  SubTitle2,
  TouchButton,
  ContentDescricao,
  Horario,
  Descricao,
  Data,
  ContentParteDescricao,
  HorarioBarra,
} from "./styles";

import logofaca from "../../assets/logofaca.png";
import fotoGustavo from "../../assets/fotoGustavo.jpeg";
import { SectionList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ListEmpty } from "../../components/ListEmpty";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { GetFoods } from "../../components/storage/getFoods";
import { useState, useCallback } from "react";
import {
  quantidadeRefeicoesTrueFalse,
  melhorSequenciaRefeicoesTrue,
  quantidadeTotalObjetos,
} from "../../components/storage/dadosDashboard";

export function Home() {
  const [data, setData] = useState([]);
  const [melhorSequencia, setMelhorSequencia] = useState("");
  const [totaldeRefeicoes, setTotaldeRefeicoes] = useState("");
  const [quantidadeTrue, setQuantidadeTrue] = useState("");
  const [quantidadeFalse, setQuantidadeFalse] = useState("");
  const [percentHome, setPercentHome] = useState("");

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const novosDados = await GetFoods();
          const arrayDeSecoes = Object.entries(novosDados).map(
            ([title, data]) => ({
              title,
              data: data.data,
            })
          );
          setData(arrayDeSecoes);
        } catch (error) {
          console.error("Erro ao obter dados:", error);
        }
      };
      fetchData();
      calculoDados2();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      calculoPercentHome();
    }, [percentHome])
  );

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  const navigation = useNavigation();

  async function calculoPercentHome() {
    const dados = await GetFoods();
    const totaldeRefeicoes1 = quantidadeTotalObjetos(dados);
    const { somaRefeicoesTrue } = quantidadeRefeicoesTrueFalse(dados);
    setPercentHome(((somaRefeicoesTrue / totaldeRefeicoes1) * 100).toFixed(2));
  }

  async function calculoDados() {
    const dados = await GetFoods();

    const melhorSequencia1 = melhorSequenciaRefeicoesTrue(dados);
    setMelhorSequencia(melhorSequencia1);
    const totaldeRefeicoes1 = quantidadeTotalObjetos(dados);
    setTotaldeRefeicoes(totaldeRefeicoes1);

    const { somaRefeicoesTrue, somaRefeicoesFalse } =
      quantidadeRefeicoesTrueFalse(dados);
    setQuantidadeFalse(somaRefeicoesFalse);
    setQuantidadeTrue(somaRefeicoesTrue);

    navigation.navigate("dashboard", {
      percent: ((somaRefeicoesTrue / totaldeRefeicoes) * 100).toFixed(2),
      melhorSequencia,
      totaldeRefeicoes,
      quantidadeFalse,
      quantidadeTrue,
    });
  }

  async function calculoDados2() {
    const dados = await GetFoods();

    const melhorSequencia1 = melhorSequenciaRefeicoesTrue(dados);
    setMelhorSequencia(melhorSequencia1);
    const totaldeRefeicoes1 = quantidadeTotalObjetos(dados);
    setTotaldeRefeicoes(totaldeRefeicoes1);

    const { somaRefeicoesTrue, somaRefeicoesFalse } =
      quantidadeRefeicoesTrueFalse(dados);
    setQuantidadeFalse(somaRefeicoesFalse);
    setQuantidadeTrue(somaRefeicoesTrue);
  }

  return (
    <Container>
      <Content>
        <Logo source={logofaca} />
        <Foto
          style={{ borderWidth: 2, borderColor: "#333638" }}
          source={fotoGustavo}
        />
      </Content>

      <ContentRetangular>
        <TouchButton onPress={calculoDados}>
          <Icon2 />
        </TouchButton>
        <ValoresCentro>
          {percentHome.toString().replace(".", ",") + "%"}
        </ValoresCentro>
        <SubTitle2>{"das refeições dentro da dieta"}</SubTitle2>
      </ContentRetangular>

      <Subtitle>{"Refeições"}</Subtitle>
      <Button onPress={() => navigation.navigate("newsnack")}>
        <Icon />
        <TitleButton>{"Nova refeição"}</TitleButton>
      </Button>
      {data.length > 0 ? (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item.id}
          renderItem={({ section, item }) => (
            <TouchButton
              onPress={() => navigation.navigate("viewsnack", { id: item.id })}
            >
              <ContentDescricao>
                <ContentParteDescricao>
                  <Horario>
                    {`${item.hora} `}
                    <HorarioBarra> | </HorarioBarra>
                  </Horario>
                  <Descricao>{truncateString(item.nome, 25)}</Descricao>
                </ContentParteDescricao>
                <Entypo
                  size={20}
                  name="controller-record"
                  color={item.dieta ? "#CBE4B4" : "#F3BABD"}
                />
              </ContentDescricao>
            </TouchButton>
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderSectionHeader={({ section: { title } }) => <Data>{title}</Data>}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ListEmpty message="Não há refeições cadastradas" />
      )}
    </Container>
  );
}
