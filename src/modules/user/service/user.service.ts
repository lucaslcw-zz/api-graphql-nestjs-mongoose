import { Model, CreateQuery, UpdateQuery } from 'mongoose';
import {
  Injectable,
  Inject,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';

import { User } from '../schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async find(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(_id: string): Promise<User> {
    if (!_id) throw new BadRequestException('O id não foi informado.');

    const user = await this.userModel.findById(_id);

    if (!user) throw new NotFoundException('Usuário não encontrado.');

    return user;
  }

  async create(input: CreateQuery<User>): Promise<User> {
    const user = await this.userModel.create(input);

    if (!user) throw new InternalServerErrorException('Houve um problema ao cadastrar o usuário.');

    return user;
  }

  async update(input: UpdateQuery<User>, _id: string): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(_id, input, { new: true });

    if (!user) throw new NotFoundException('Usuário não encontrado.');

    return user;
  }

  async delete(_id: string): Promise<User> {
    const user = await this.userModel.findByIdAndRemove(_id);

    if (!user) throw new NotFoundException('Usuário não encontrado.');

    return user;
  }
}
