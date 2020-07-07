export const isPalindrome = (num: number) => {
  const str = String(num)

  const first = str.slice(0, str.length / 2)
  const second = str.slice(str.length / 2)
    .split('')
    .reverse()
    .join('')
  
  return str.length % 2 === 0
    ? first === second
    : first === second.substring(0, second.length - 1)
}

export default (first: number, second: number) => {
  let i = first
  let j = second
  let largest = 0

  do {
    do {
      const product = i * j

      if (product < largest) {
        break
      }

      if (isPalindrome(product)) {
        largest = product
      }

      j = j - 1
    } while (j > 0)
    j = i - 1
    i = i - 1
  } while (i > 0)

  return largest
}
