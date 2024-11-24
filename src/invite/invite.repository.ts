import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateInviteDto } from "./dto/create-invite-dto";
import { Invite } from "./invite.entity";

@Injectable()
export class InviteRepository extends Repository<Invite> {
  [x: string]: any;

  constructor(private datasource: DataSource) {
    super(Invite, datasource.createEntityManager());
  }

  async CreateInvite(CreateInviteDto: CreateInviteDto, ): Promise<Invite> {
    const { email, name } = CreateInviteDto;

    const invite = this.create();
    invite.email = email;
    invite.name = name;

    try {
      await invite.save();
      return invite;
    } catch (error) {
        throw new InternalServerErrorException(
          'Erro ao salvar o convite no banco de dados',
        );
      }
    }
  }