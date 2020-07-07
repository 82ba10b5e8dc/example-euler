export const isWhole = (num: number) => {
  return num - Math.floor(num) === 0
}

export const largestFactor = (factor: number, num: number): number => {
  if (num === factor) {
    return num
  }

  return isWhole(num / factor)
    ? largestFactor(2, num / factor)
    : largestFactor(factor + 1, num)
}

export default (limit: number) => {
  return largestFactor(2, limit)
}
