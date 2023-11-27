import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION1 } from "./storageConfig";
import { AppError } from "../../utils/AppError";

export async function GetFood(foodId) {
  try {
    const foodGetAll = await AsyncStorage.getItem(FOOD_COLLECTION1);
    let storage = [];

    if (foodGetAll) {
      storage = JSON.parse(foodGetAll);
    }

    // Encontrar a comida pelo ID
    const foundFood = storage.find((item) => item.id === foodId);

    if (!foundFood) {
      throw new AppError("Comida não encontrada");
    }

    return foundFood;
  } catch (error) {
    throw new AppError("Erro ao buscar a comida por ID", error);
  }
}
