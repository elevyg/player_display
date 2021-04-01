const bp = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 }

export const mq = (n: keyof typeof bp) => {
  const bpArray = Object.keys(bp).map((key) => [key, bp[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}
