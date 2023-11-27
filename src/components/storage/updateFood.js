import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION1 } from "./storageConfig";

export async function UpdateFood(id, updatedData) {
  try {
    // 1. Obtenha o array atual do AsyncStorage
    let foodGetAll = await AsyncStorage.getItem(FOOD_COLLECTION1);

    if (!foodGetAll) {
      // Lidar com o caso em que ainda não há dados armazenados
      return;
    }

    // Parse apenas se foodGetAll for uma string
    if (typeof foodGetAll === "string") {
      foodGetAll = JSON.parse(foodGetAll);
    }

    // 2. Encontre o elemento que corresponde ao ID específico
    const indexToUpdate = foodGetAll.findIndex((food) => food.id === id);

    if (indexToUpdate === -1) {
      // Lidar com o caso em que o ID não foi encontrado
      return;
    }

    // 3. Faça as alterações desejadas nesse elemento
    foodGetAll[indexToUpdate] = {
      ...foodGetAll[indexToUpdate],
      ...updatedData,
    };

    // 4. Atualize o AsyncStorage com o array modificado
    await AsyncStorage.setItem(FOOD_COLLECTION1, JSON.stringify(foodGetAll));
  } catch (error) {
    console.error("Erro em UpdateFood:", error);
    throw error;
  }
}
