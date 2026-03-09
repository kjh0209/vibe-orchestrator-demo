export interface UserCredentials { email: string; password: string; }

export interface AuthResponse { success: boolean; token?: string; error?: string; }