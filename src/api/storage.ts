import jwtDecode from "jwt-decode";
import { UserModel } from "../types/UserModel";

const TOKEN_KEY = process.env.STORAGE_TOKEN_KEY || "STORAGE_TOKEN_KEY_standin";

export const GET_TOKEN = (): string | null => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  return token ?? null;
};

export const STORE_TOKEN = (token: string) => {
  return sessionStorage.setItem(TOKEN_KEY, token);
};

export const EXPIRE_TOKEN = () => {
  return sessionStorage.removeItem(TOKEN_KEY);
};

export const DECODE_TOKEN = (): UserModel | null => {
  // debugger
  const token = GET_TOKEN();
  if (token) {
    const user: UserModel = jwtDecode(token);
    return {
      username: user.username,
      email: user.email,
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      displayPicId: user.displayPicId,
      joinDate: user.joinDate,
      imageUrl: user.imageUrl,
    };
  }
  return null;
};
