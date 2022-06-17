import { precision2 } from './numbers'

test('precision 2', () => {
  const result = 1.02
  const calculated = precision2(1.0234)
  expect(calculated).toEqual(result)
})
