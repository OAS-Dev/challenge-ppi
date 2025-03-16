import axios from 'axios';
import {API} from '../config/api';

export const getLatestRates = async () => {
  try {
    const response = await axios.get(`${API.host}/rates`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los tipos de cambio:', error);
  }
};
