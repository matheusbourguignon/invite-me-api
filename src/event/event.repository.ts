import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateEventDto } from "./dto/create-event-dto";
import { Event } from "./event.entity";

@Injectable()
export class EventRepository extends Repository<Event> {

  constructor(private datasource: DataSource) {
    super(Event, datasource.createEntityManager());
  }

  async createEvent(createEventDto: CreateEventDto, ): Promise<Event> {
    const { name, date } = createEventDto;

    const event = this.create();
    event.name = name;
    event.date = date;

    try {
      await event.save();
      return event;
    } catch (error) {
        throw new InternalServerErrorException(
          'Erro ao salvar o evento no banco',
        );
      }
    }
  }