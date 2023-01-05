import { User } from "./User";

export interface UserState {
  user?: User;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
