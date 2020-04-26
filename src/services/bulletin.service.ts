import {Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'

import {BulletinsResponse} from 'src/graphql.schema'

@Injectable()
export class BulletinService {
  public constructor(private readonly configService: ConfigService) {}

  public getBulletins(): BulletinsResponse {
    const dbUri = this.configService.get('databaseUri')

    console.log('dbUri :', dbUri)

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
