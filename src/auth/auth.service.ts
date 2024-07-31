import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare } from 'bcryptjs';
import { JwtClaims } from 'src/interfaces/jwt-claims.interface';
import { UserWithoutPassword } from 'src/interfaces/user-without-password.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(email: string, pass: string): Promise<UserWithoutPassword | null> {
    const user = await this.userService.findByEmail(email);

    if (!user || !(await compare(pass, user.password))) {
      return null;
    }

    const { password, ...result } = user;
    return result;
  }

  public async login(user: UserWithoutPassword) {
    const payload: JwtClaims = {
      username: user.username,
      email: user.email,
      sub: user.id,
    };

    const result = await this.jwtService.signAsync(payload);
    return result;
  }
}
