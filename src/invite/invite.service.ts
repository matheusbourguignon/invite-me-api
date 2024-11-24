import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InviteRepository } from "./invite.repository";
import { CreateInviteDto } from "./dto/create-invite-dto";
import { Invite } from "./invite.entity";

@Injectable()
export class InviteService {

  constructor(

    @InjectRepository(InviteRepository)
    private inviteRepository: InviteRepository,
  ) {}

  async createInvite(CreateInviteDto: CreateInviteDto): Promise<Invite> {
      return this.inviteRepository.createInvite(CreateInviteDto);
  }

}