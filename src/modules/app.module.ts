import {Module} from '@nestjs/common'
import {GraphQLModule} from '@nestjs/graphql'

import {AppService} from '../services/app.service'
import {AppController} from '../controllers/app.controller'
import {BulletinResolvers} from 'src/resolvers/bulletin/bulletin.resolvers'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BulletinResolvers],
})
export class AppModule {}
