import { Controller, Post, Body, ValidationPipe, UseGuards, Req, Get } from "@nestjs/common";
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials-dto';
import { CreateUserDto } from '../user/dto/create-user-dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.entity';
import any = jasmine.any;

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<{ message: string }> {
    await this.authService.signUp(createUserDto);
    return {
      message: 'Cadastro realizado com sucesso',
    };
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) credentialsDto: CredentialsDto,
  ): Promise<{ token: string }> {
    return await this.authService.signIn(credentialsDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  getMe(@Req() req): User {
    return req.user;
  }

}