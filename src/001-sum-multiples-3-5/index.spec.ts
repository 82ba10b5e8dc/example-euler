import main from './index'

describe('main', () => {
  test('it should return 23 for all values udner 10', () => {
    expect(main(10)).toBe(23)
  })

  test('it should return 0 if 0 is passed', () => {
    expect(main(1000)).toBe(233168)
  })

  test('it should return 0 if 0 is passed', () => {
    expect(main(0)).toBe(0)
  })
})
