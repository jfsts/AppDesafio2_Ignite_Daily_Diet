import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION1 } from "./storageConfig";
import { AppError } from "../../utils/AppError";

export async function createFood(dadosOriginais) {
  try {
    function generateUniqueId() {
      return (
        Math.random().toString(36).substring(2) +
        Date.now().toString(36) +
        Math.random().toString(36).substring(2)
      );
    }

    const novoId = generateUniqueId();
    const dadoComId = { ...dadosOriginais, id: novoId };

    const foodGetAll = await AsyncStorage.getItem(FOOD_COLLECTION1);
    let storage = [];

    if (foodGetAll) {
      storage = JSON.parse(foodGetAll);
    }
    storage.push(dadoComId);

    await AsyncStorage.setItem(FOOD_COLLECTION1, JSON.stringify(storage));

    return storage;
  } catch (error) {
    throw new AppError("Erro ao criar alimento", error);
  }
}
