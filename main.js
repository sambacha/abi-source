import { compile, compileFromFile } from 'json-schema-to-typescript'
import fs from  'fs';
// compile from file
compileFromFile('abi2.schema.json')
  .then(ts => fs.writeFileSync('types2.d.ts', ts))