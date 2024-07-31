import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) {}

  public find(whereUnique: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: whereUnique
    });
  }

  public findByEmail(email: string): Promise<User | null> {
    return this.find({ email });
  }

  public findByUsername(username: string): Promise<User | null> {
    return this.find({ username });
  }

  public async createUser(data: Prisma.UserCreateInput) {
    data.password = await hash(data.password, Number(process.env.PASSWORD_SALT));
    
    const { password, ...result } = await this.prisma.user.create({ data });
    return result;
  }
}