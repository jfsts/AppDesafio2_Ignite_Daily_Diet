import {
  Container,
  Title,
  BackButton,
  BackIcon,
  Content,
  Header,
  Label,
  Tag,
  Content2,
  Label2,
  TitleButton,
  Button,
} from "./styles";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { GetFood } from "../../components/storage/getFood";

import { Trash, PencilSimpleLine } from "phosphor-react-native";
import { RemoveFood } from "../../components/storage/removeFood";
import { Modal } from "../../components/Modal";

export function ViewSnack() {
  const [food, setFood] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  async function Remover(id) {
    await RemoveFood(id);
    navigation.navigate("home");
  }

  function handleRemove() {
    setModalVisible(true);
    //    Alert.alert("Excluir", "Deseja remover a refeição ?", [
    //    { text: "Não", style: "cancel" },
    //  { text: "Sim", onPress: () => Remover(id) },
    // ]);
  }
  async function fetchFood(id) {
    try {
      const data = await GetFood(id);
      setFood(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    fetchFood(id);
  }, []);

  return (
    <Container>
      <Header
        style={
          food.dieta
            ? { backgroundColor: "#E5F0DB" }
            : { backgroundColor: "#F4E6E7" }
        }
      >
        <BackButton onPress={() => navigation.navigate("home")}>
          <BackIcon />
        </BackButton>
        <Title>{"Refeição"}</Title>
      </Header>
      <Content>
        <Label>{food.nome}</Label>
        <Label2>{food.descricao}</Label2>
        <Label>{"Data e hora"}</Label>
        <Label2>
          {food.data} às {food.hora}
        </Label2>

        <Content2>
          <Entypo
            name="dot-single"
            size={24}
            color={food.dieta ? "#639339" : "#BF3B44"}
          />
          <Tag>{food.dieta ? "dentro da dieta" : "fora da dieta"}</Tag>
        </Content2>
      </Content>
      <Button
        onPress={() => navigation.navigate("editsnack", { id: food.id })}
        style={{ marginTop: 100 }}
      >
        <PencilSimpleLine size={24} color="white" />
        <TitleButton>{"Editar refeição"}</TitleButton>
      </Button>
      <Button onPress={() => handleRemove(food.id)} style={{ marginTop: 15 }}>
        <Trash size={24} color="white" />
        <TitleButton>{"Excluir refeição"}</TitleButton>
      </Button>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        textoModal={"Deseja realmente excluir o registro da refeição?"}
        textoBotaoEsquerdo={"Cancelar"}
        textoBotaoDireito={"Sim, excluir"}
        id={id}
        funcao={Remover}
      />
    </Container>
  );
}
