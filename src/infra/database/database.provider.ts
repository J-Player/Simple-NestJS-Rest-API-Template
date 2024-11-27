import { DataSource } from 'typeorm'

export const DATA_SOURCE = 'DATA_SOURCE'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'postgres',
        entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
        synchronize: true,
        useUTC: true,
      })

      return dataSource.initialize()
    },
  },
]
