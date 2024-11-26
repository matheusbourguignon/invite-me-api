import { DataSource, Repository } from "typeorm";
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { UserRole } from './user-roles.enum';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import {
  ConflictException, Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { CredentialsDto } from '../auth/dto/credentials-dto';

@Injectable()
export class UserRepository extends Repository<User> {

  constructor(private datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }

  async createUser(
    createUserDto: CreateUserDto,
    role: UserRole,
  ): Promise<User> {
    const { email, name, password } = createUserDto;

    const user = this.create();
    user.email = email;
    user.name = name;
    user.role = role;
    user.status = true;
    user.confirmationToken = crypto.randomBytes(32).toString('hex');
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    try {
      await user.save();
      delete user.password;
      delete user.salt;
      return user;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }

  async checkCredentials(credentialsDto: CredentialsDto): Promise<User> {
    const { email, password } = credentialsDto;

    // @ts-ignore
    // Buscando o usuario pelo email
    const user = await this.findOneBy({ email: email, status: true });

    //Comparando a senha informada no request com a senha salva no banco de dados
    if (user && (await user.checkPassword(password))) {
      return user;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}