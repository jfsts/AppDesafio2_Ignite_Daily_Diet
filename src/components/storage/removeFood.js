import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION1 } from "./storageConfig";
import { GetFood } from "./getFood";

export async function RemoveFood(id) {
  try {
    let foodGetAll = await AsyncStorage.getItem(FOOD_COLLECTION1);

    if (!foodGetAll) {
      return;
    }

    if (typeof foodGetAll === "string") {
      foodGetAll = JSON.parse(foodGetAll);
    }

    const filtered = foodGetAll.filter((food) => food.id !== id);
    const foods = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${FOOD_COLLECTION1}`, foods);
  } catch (error) {
    console.error("Erro em RemoveFood:", error);
    throw error;
  }
}
