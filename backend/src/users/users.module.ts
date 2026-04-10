import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module'; // 👈 import

@Module({
  imports: [PrismaModule], // 👈 add this
  providers: [UsersService],
})
export class UsersModule {}