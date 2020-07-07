export default (limit: number) => {
  let i = 0
  let n = 0

  do {
    if (i % 5 === 0 || i % 3 === 0) {
      n = n + i
    }

    i++
  } while (i < limit)

  return n
}
