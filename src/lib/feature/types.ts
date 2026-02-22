export interface UserCredentials { username: string; password: string; }
export interface AuthResponse { token: string; user: { id: string; username: string; }; }