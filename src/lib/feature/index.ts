import { UserCredentials, AuthResponse } from './types';

const usersDb: Record<string, string> = {};

export const registerUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const { email, password } = credentials;
  if (usersDb[email]) {
    return { success: false, message: 'User already exists' };
  }
  usersDb[email] = password;
  return { success: true, message: 'User registered successfully' };
};

export const loginUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const { email, password } = credentials;
  if (!usersDb[email] || usersDb[email] !== password) {
    return { success: false, message: 'Invalid email or password' };
  }
  return { success: true, message: 'Login successful', token: 'dummy-token' };
};