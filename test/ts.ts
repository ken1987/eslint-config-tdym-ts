export default {
  data() {
    const ccc = { a: 1 }
    const { a: bbb } = ccc

    const b = '1'

    let c
    c = 2
    c = 3

    return {
      a: bbb,
      b,
      c,
    }
  },
}
