import { Injectable, InternalServerErrorException, ConflictException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CheckIn } from "./checkin.entity";
import { CreateCheckInDto } from "./dto/create-checkin-dto";

@Injectable()
export class CheckInRepository extends Repository<CheckIn> {

  constructor(private dataSource: DataSource) {
    super(CheckIn, dataSource.createEntityManager());
  }

  async createCheckIn(createCheckInDto: CreateCheckInDto): Promise<CheckIn> {
    const { email, name } = createCheckInDto;

    // Verifica se o usuário já fez o check-in
    const existingCheckIn = await this.findOne({ where: { email, name } });
    
    if (existingCheckIn) {
      throw new ConflictException('O usuário já fez check-in com este email e nome.');
    }

    const checkIn = this.create();
    checkIn.email = email;
    checkIn.name = name;

    try {
      await checkIn.save();
      return checkIn;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao salvar o check-in.');
    }
  }
}
