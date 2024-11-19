import { describe, expect, test } from '@jest/globals';
import { hello } from '..';


describe('My First Test', () => {
  test('should first', () => {
    const text = "Victor!"
    expect(hello(text).match("Hello Victor!!"))
  });

})