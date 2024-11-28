import { Controller, Post, Body, UseGuards, ValidationPipe } from '@nestjs/common';
import { CheckInService } from './checkin.service';
import { CreateCheckInDto } from './dto/create-checkin-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('checkin')
export class CheckInController {
  constructor(private checkInService: CheckInService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createCheckIn(
    @Body(ValidationPipe) createCheckInDto: CreateCheckInDto,
  ) {
    const checkIn = await this.checkInService.checkIn(createCheckInDto);
    return { message: 'Check-in realizado com sucesso', checkIn };
  }
}
