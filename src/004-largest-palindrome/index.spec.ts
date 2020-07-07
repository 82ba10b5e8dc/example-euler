import main, { isPalindrome } from './index'

describe('main', () => {
  test('it should return the largest palindrome of factors and below', () => {
    expect(main(999, 999)).toBe(906609)
  })
})

describe('isPalindrome', () => {
  test('it should return true if the string is a palindrome', () => {
    expect(isPalindrome(123321)).toBe(true)
  })

  test('it should return false if the string is asymetrical', () => {
    expect(isPalindrome(121)).toBe(true)
  })

  test('it should return false if the string is asymetrical', () => {
    expect(isPalindrome(123)).toBe(false)
  })
})
