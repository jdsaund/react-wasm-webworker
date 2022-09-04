import { expose } from 'comlink'

expose({
  reverseString: (value: string) => value.split('').reverse().join('')
})
