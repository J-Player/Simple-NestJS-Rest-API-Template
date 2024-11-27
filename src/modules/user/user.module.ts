import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserBaseRepository } from './repositories/user.base.repository'
import { UserService } from './user.service'
import { UserRepository } from './repositories/user.repository'
import { userProviders } from './providers/user.providers'

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserBaseRepository,
      useClass: UserRepository,
    },
    ...userProviders,
  ],
  exports: [UserService, UserBaseRepository],
})
export class UserModule {}
