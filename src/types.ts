export interface WasmWorker {
  initialize: () => Promise<void>,
  reverseString: (value: string) => string
}
