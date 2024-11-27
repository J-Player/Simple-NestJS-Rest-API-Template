import { User } from 'src/modules/user/entities/user.entity'
import { DataSource } from 'typeorm'

export const USER_REPOSITORY = 'USER_REPOSITORY'

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
]
