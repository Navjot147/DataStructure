function sum (...args) {
  return Object.assign(
    sum.bind(null, ...args),
    { valueOf: () => args.reduce((a, c) => a + c, 0) }
  )
}

console.log(sum(1,4, 2).valueOf());