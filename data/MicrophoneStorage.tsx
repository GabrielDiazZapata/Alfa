// MicrophoneStorage.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecordFile } from "../screens/MicrophoneScreen"; // Asegúrate de tener la importación correcta aquí

export const storeRecordings = async (value: RecordFile[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userRecordings', jsonValue);
  } catch (error) {
    console.error("Error al guardar las grabaciones:", error);
  }
};

export const getRecordings = async (): Promise<RecordFile[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('userRecordings');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Error al obtener las grabaciones:", error);
  }
  return null;
};
