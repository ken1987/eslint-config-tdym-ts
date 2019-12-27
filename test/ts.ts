export default {
  data() {
    const ccc = { a: 1 }
    const { a: bbb } = ccc

    const b = '1'

    return {
      a: bbb,
      b,
    }
  },
}
