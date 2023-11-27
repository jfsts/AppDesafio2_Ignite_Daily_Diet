import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION1 } from "./storageConfig";
import { AppError } from "../../utils/AppError";

export async function GetFoods() {
  try {
    const foodGetAll = await AsyncStorage.getItem(FOOD_COLLECTION1);
    let storage = [];

    if (foodGetAll) {
      storage = JSON.parse(foodGetAll);
    }

    const arrayDeSecoes = storage.reduce((acumulador, item) => {
      const { data, ...dados } = item;

      if (!acumulador[data]) {
        acumulador[data] = { title: data, data: [dados] };
      } else {
        acumulador[data].data.push(dados);
      }

      return acumulador;
    }, {});

    return arrayDeSecoes;
  } catch (error) {
    throw new AppError("Sem refeições cadastradas", error);
  }
}
