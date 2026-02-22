export interface UserCredentials { email: string; password: string; }

export interface AuthResponse { success: boolean; message?: string; token?: string; }