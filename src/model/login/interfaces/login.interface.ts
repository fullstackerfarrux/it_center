export declare interface LoginRequest {
  username?: string;
  password?: string;
}

export declare interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
