import { Body, Controller, Post, Request, UseGuards, ValidationPipe } from "@nestjs/common";
import { CreateInviteDto } from "./dto/create-invite-dto";
import { InviteService } from "./invite.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('invite')
export class InviteController {
  constructor(private inviteService: InviteService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/save')
  async save(@Body(ValidationPipe) CreateInviteDto: CreateInviteDto, @Request() request): Promise<{ message: string }> {
    await this.inviteService.createInvite(CreateInviteDto);
    return {
      message: 'Convite criado com sucesso',
    };
  }
}