import { Injectable } from "@nestjs/common";
import { CheckInRepository } from "./checkin.repository";
import { CreateCheckInDto } from "./dto/create-checkin-dto";
import { CheckIn } from "./checkin.entity";

@Injectable()
export class CheckInService {
  constructor(private checkInRepository: CheckInRepository) {}

  async checkIn(createCheckInDto: CreateCheckInDto): Promise<CheckIn> {
    return this.checkInRepository.createCheckIn(createCheckInDto);
  }
}
