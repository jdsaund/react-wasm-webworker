import { expose } from 'comlink'
import init, { reverse_string } from 'wasm-worker'

async function initialize () {
  // needs to be wrapped to prevent `#<Memory> could not be cloned`
  await init()
}

expose({
  initialize,
  reverseString: async (value: string): Promise<string> => {
    return await reverse_string(value)
  }
})
