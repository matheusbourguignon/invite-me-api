import { Body, Controller, Post, Request, UseGuards, ValidationPipe } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event-dto";
import { EventService } from "./event.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/save')
  async save(@Body(ValidationPipe) createEventDto: CreateEventDto, @Request() request): Promise<{ message: string }> {
    await this.eventService.createEvent(createEventDto);
    return {
      message: 'Cadastro realizado com sucesso',
    };
  }
}