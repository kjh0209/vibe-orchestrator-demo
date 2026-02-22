import { UserCredentials, AuthResponse } from './types';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const API_URL = process.env.API_URL;

export const authenticateUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/authenticate`, credentials);
  return response.data;
};