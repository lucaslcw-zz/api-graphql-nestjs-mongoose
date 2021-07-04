import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CreateUserInput, UpdateUserInput } from '../input';
import { UserService } from '../service/user.service';
import { User } from '../schema/user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers() {
    return await this.userService.find();
  }

  @Query(() => User)
  async getUser(@Args('_id') _id: string) {
    return await this.userService.findOne(_id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return await this.userService.create(input);
  }

  @Mutation(() => User)
  async updateUser(@Args('_id') _id: string, @Args('input') input: UpdateUserInput) {
    return await this.userService.update(input, _id);
  }

  @Mutation(() => User)
  async deleteUser(@Args('_id') _id: string) {
    return await this.userService.delete(_id);
  }
}
