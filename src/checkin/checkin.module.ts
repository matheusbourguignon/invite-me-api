import { Module } from '@nestjs/common';
import { CheckInController } from './checkin.controller';
import { CheckInService } from './checkin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckInRepository } from './checkin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CheckInRepository])],
  controllers: [CheckInController],
  providers: [CheckInService, CheckInRepository],
})
export class CheckInModule {}
