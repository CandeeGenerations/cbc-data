import {Resolver, Query} from '@nestjs/graphql'

import {BulletinsResponse} from 'src/graphql.schema'

@Resolver('Bulletin')
export class BulletinResolvers {
  // todo : import the service
  // public constructor() {}

  @Query()
  public async getBulletins(): Promise<BulletinsResponse> {
    // todo : call the service
    const response = new BulletinsResponse()

    response.bulletins = [
      {
        id: '1',
        month: 3,
        year: 2020,
        date: 'Mar 29, 2020',
        pdf: 'pdf-url',
        image: 'image-url',
      },
    ]

    return response
  }
}
