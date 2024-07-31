import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { getUserFromRequest } from 'src/utils/getUserFromRequest.util';
import { Prisma } from '@prisma/client';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  public async create(@Request() req, @Body() createTaskDto: CreateTaskDto) {
    const user = getUserFromRequest(req);
    const taskWithUser: Prisma.TaskUncheckedCreateInput = { ...createTaskDto, userId: user.id };

    const result = await this.taskService.createTask(taskWithUser);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getAll(@Request() req) {
    const user = getUserFromRequest(req);
    const tasks = await this.taskService.getAllTasks(user.id);

    if (!tasks.length) {
      throw new NotFoundException('No tasks were found');
    }

    return tasks;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':taskId')
  public remove(@Request() req, @Param('taskId', ParseIntPipe) taskId: number) {    
    const user = getUserFromRequest(req);
    return this.taskService.deleteTask(taskId, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':taskId')
  public async update(@Request() req, @Param('taskId', ParseIntPipe) taskId: number, @Body() task: UpdateTaskDto) {
    const user = getUserFromRequest(req);
    const result = await this.taskService.updateTask(taskId, user.id, task);
    return result;
  }
}
