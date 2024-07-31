import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor (private readonly prisma: PrismaService) {}

  public async createTask(data: Prisma.TaskUncheckedCreateInput) {
    const result = await this.prisma.task.create({ data });
    return result;
  }

  public async getAllTasks(userId: number) {
    const result = await this.prisma.task.findMany({
      where: {
        userId
      }
    });

    return result;
  }

  public async deleteTask(id: number, userId: number) {
    await this.prisma.task.delete({ where: { id, userId } });
  }

  public async updateTask(id: number, userId: number, data: Prisma.TaskUpdateInput) {
    const result = await this.prisma.task.update({
      where: { id, userId },
      data
    });

    return result;
  }
}
