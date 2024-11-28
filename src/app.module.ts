import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { AuthModule } from './auth/auth.module';
import { InviteModule } from './invite/invite.module';
import { CheckInModule } from './checkin/checkin.module';



@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), TypeOrmModule.forRoot(typeOrmConfig), UserModule, EventModule, AuthModule, InviteModule, CheckInModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
