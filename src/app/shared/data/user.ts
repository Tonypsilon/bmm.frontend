import { Role } from "./role";

export interface User {
  name: string;
  password: string;
  roles: Role[];
}
