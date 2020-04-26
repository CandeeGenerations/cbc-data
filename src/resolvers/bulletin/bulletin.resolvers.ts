import {Resolver, Query} from '@nestjs/graphql'

import {BulletinsResponse} from 'src/graphql.schema'
import {BulletinService} from '../../services/bulletin.service'

@Resolver('Bulletin')
export class BulletinResolvers {
  public constructor(private readonly bulletinService: BulletinService) {}

  @Query()
  public async getBulletins(): Promise<BulletinsResponse> {
    return this.bulletinService.getBulletins()
  }
}
