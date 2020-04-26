import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'

import configuration from '../config/app'
import {AppService} from '../services/app.service'
import {AppController} from '../controllers/app.controller'
import {BulletinService} from 'src/services/bulletin.service'
import {BulletinResolvers} from 'src/resolvers/bulletin/bulletin.resolvers'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BulletinResolvers, BulletinService],
})
export class AppModule {}
