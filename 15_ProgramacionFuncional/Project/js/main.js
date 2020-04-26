const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)
