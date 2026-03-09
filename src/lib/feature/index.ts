import { UserCredentials, AuthResponse } from './types';

const mockDatabase: Record<string, string> = {};

export const registerUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const { email, password } = credentials;
  if (mockDatabase[email]) {
    return { success: false, error: 'User already exists.' };
  }
  mockDatabase[email] = password;
  return { success: true, token: 'mockToken' };
};

export const loginUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const { email, password } = credentials;
  if (mockDatabase[email] !== password) {
    return { success: false, error: 'Invalid email or password.' };
  }
  return { success: true, token: 'mockToken' };
};