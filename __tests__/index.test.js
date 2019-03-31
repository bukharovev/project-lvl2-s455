import fs from 'fs';
import genDiff from '../src';

const formatsFile = ['json', 'yaml', 'ini'];

test.each(formatsFile)('%s diff simple', (format) => {
  const before = `__tests__/__fixtures__/__simple__/before.${format}`;
  const after = `__tests__/__fixtures__/__simple__/after.${format}`;
  const result = fs.readFileSync('__tests__/__fixtures__/__simple__/expected.txt', 'utf-8');
  expect(genDiff(before, after)).toBe(result);
});

test.each(formatsFile)('%s diff nested format standard', (format) => {
  const before = `__tests__/__fixtures__/__nested__/before.${format}`;
  const after = `__tests__/__fixtures__/__nested__/after.${format}`;
  const result = fs.readFileSync('__tests__/__fixtures__/__nested__/expected.txt', 'utf-8');
  expect(genDiff(before, after)).toBe(result);
});

test.each(formatsFile)('%s diff nested format plain', (format) => {
  const before = `__tests__/__fixtures__/__nested__/before.${format}`;
  const after = `__tests__/__fixtures__/__nested__/after.${format}`;
  const result = fs.readFileSync('__tests__/__fixtures__/__nested__/expectedPlain.txt', 'utf-8');
  expect(genDiff(before, after, 'plain')).toBe(result);
});

test.each(formatsFile)('%s diff nested format json', (format) => {
  const before = `__tests__/__fixtures__/__nested__/before.${format}`;
  const after = `__tests__/__fixtures__/__nested__/after.${format}`;
  const result = fs.readFileSync('__tests__/__fixtures__/__nested__/expectedJson.txt', 'utf-8');
  expect(genDiff(before, after, 'json')).toBe(result);
});
