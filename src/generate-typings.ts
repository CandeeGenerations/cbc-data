import * as path from 'path'
import {GraphQLDefinitionsFactory} from '@nestjs/graphql'

const definitionFactory = new GraphQLDefinitionsFactory()

definitionFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: path.join(process.cwd(), 'src/graphql.schema.ts'),
  outputAs: 'class',
})
