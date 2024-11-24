import { Module } from '@nestjs/common';
import { InviteController } from './invite.controller';
import { InviteService } from './invite.service';
import { TypeOrmModule } from "@nestjs/typeorm";
 import {InviteRepository} from "./invite.repository"
import { UserRepository } from "../user/user.repository";




@Module({
  imports: [TypeOrmModule.forFeature([InviteRepository])],
  providers: [InviteService, InviteRepository, UserRepository],
  controllers: [InviteController],
})
export class InviteModule {}