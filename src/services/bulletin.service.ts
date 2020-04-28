import {Injectable} from '@nestjs/common'
import {PrismaClient} from '@prisma/client'

import {BulletinsResponse} from 'src/graphql.schema'
import * as bulletinMorphs from 'src/morphs/bulletin.morph'

@Injectable()
export class BulletinService {
  private readonly prisma: PrismaClient

  public constructor() {
    this.prisma = new PrismaClient()
  }

  public async getBulletins(): Promise<BulletinsResponse> {
    const bulletins = await this.prisma.bulletins.findMany()

    await this.prisma.disconnect()

    return {
      bulletins: bulletins.map((bulletin) =>
        bulletinMorphs.morphBulletin(bulletin),
      ),
    }
  }
}
