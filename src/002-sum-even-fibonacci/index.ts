export default (limit: number) => {
  let first  = 0
  let second = 1
  let sum = 0

  do {
    const next = first + second

    if (next % 2 === 0) {
      sum = sum + next
    }

    first = second
    second = next
  } while (second < limit)

  return sum
}
