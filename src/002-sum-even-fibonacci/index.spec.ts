import main from './index'

describe('main', () => {
  test('it should return sum all even values to 1,000,000', () => {
    expect(main(4000000)).toBe(4613732)
  })

  test('it should return 0 if passed', () => {
    expect(main(0)).toBe(0)
  })
})
