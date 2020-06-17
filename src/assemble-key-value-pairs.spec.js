import { expect } from 'chai';
import assembleKeyValuePairs from './assemble-key-value-pairs';

describe('assembleKeyValuePairs', () => {
  it('should create an object from an array of [key, value] pairs', () => {
    expect(
      assembleKeyValuePairs([
        ['one', 1],
        ['two', 2],
      ])
    ).to.eql({ one: 1, two: 2 });
  });
});
