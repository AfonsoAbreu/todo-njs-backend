import { UserWithoutPassword } from "src/interfaces/user-without-password.interface";

export function getUserFromRequest(request: any): UserWithoutPassword {
  return request.user;
}