import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const defaultroute = async (): Promise<string> => {
  try {
    const response = await axios.get(BASE_URL);
    return response?.data;
  } catch (error) {
    console.error('Error fetching /gg data:', error);
    throw error;
  }
};

export const ggroute = async (): Promise<string> => {
  try {
    const response = await axios.get(`${BASE_URL}/gg`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching /gg data:', error);
    throw error;
  }
};
