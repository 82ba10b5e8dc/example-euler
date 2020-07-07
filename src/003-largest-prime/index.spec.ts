import main, { isWhole } from './index'

describe('main', () => {
  test('it should return 29 as the largest prime factor', () => {
    expect(main(13195)).toBe(29)
  })

  test('it should return the correct largest prime factor', () => {
    expect(main(600851475143)).toBe(6857)
  })
})

describe('isWhole', () => {
  test('it should return false if fraction exists', () => {
    expect(isWhole(12.1)).toBe(false)
  })

  test('it should return true if no fraction exists', () => {
    expect(isWhole(12)).toBe(true)
  })
})
