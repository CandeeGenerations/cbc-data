import * as dayjs from 'dayjs'
import {bulletins} from '@prisma/client'
import {morphism, StrictSchema} from 'morphism'

import {BulletinResponse} from 'src/graphql.schema'

const bulletinMapping = {
  id: 'id',
  month: 'month',
  year: 'year',
  pdf: 'pdf',
  image: 'image',
  date: ({date}: bulletins) => dayjs(date).format('MMM D, YYYY'),
}

export const morphBulletin = (source: bulletins): BulletinResponse =>
  morphism<StrictSchema<BulletinResponse, bulletins>>(bulletinMapping, source)
