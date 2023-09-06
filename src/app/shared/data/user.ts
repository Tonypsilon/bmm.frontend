import { Role } from "./role";

export interface User {
  username: string;
  password: string;
  roles?: Role[];
  email: string;
  phone?: string;
}
