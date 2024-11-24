import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventRepository } from "./event.repository";
import { CreateEventDto } from "./dto/create-event-dto";
import { Event } from "./event.entity";

@Injectable()
export class EventService {

  constructor(

    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
      return this.eventRepository.createEvent(createEventDto);
  }

}