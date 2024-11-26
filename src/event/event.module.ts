import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from "./event.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventRepository } from "./event.repository";
import { UserRepository } from "../user/user.repository";


@Module({
  imports: [TypeOrmModule.forFeature([EventRepository])],
  providers: [EventService, EventRepository, UserRepository],
  controllers: [EventController],
})
export class EventModule{}