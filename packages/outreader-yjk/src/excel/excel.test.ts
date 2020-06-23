import { readStructure } from '../structure';
import { exportExcel } from './excel';
import { IStructure, hashStr } from '@outreader/core';
import * as path from 'path';

describe('exportExcel', () => {
  const dir = path.join(__dirname, '../../../../fixtures/yjk/1');
  let structure: IStructure;
  let result: boolean;

  beforeEach(async () => {
    structure = await readStructure(dir);
    result = exportExcel(dir, structure);
  });

  it('should extract result', async () => {
    expect(result).toBe(true);
  });
});
