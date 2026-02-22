import { UserCredentials, AuthResponse } from './types';

const mockDb: Record<string, string> = {}; // 예시용 사용자 데이터베이스

export const authenticateUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const { email, password } = credentials;

  if (!mockDb[email] || mockDb[email] !== password) {
    return { success: false, message: 'Invalid email or password' };
  }

  // 성공 시 토큰 생성 로직 (예시)
  const token = 'mockToken';
  return { success: true, token };
};