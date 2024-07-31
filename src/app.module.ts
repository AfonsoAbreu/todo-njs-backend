import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { TaskModule } from './task/task.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    TaskModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
