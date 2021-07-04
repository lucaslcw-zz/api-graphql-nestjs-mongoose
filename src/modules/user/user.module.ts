import { Module } from '@nestjs/common';

import { UserResolver } from './resolver/user.resolver';
import { UserService } from './service/user.service';
import { userProviders } from './providers/user.providers';

import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...userProviders],
})
export class UserModule {}
