class A {
  a = 1

  async b() {
    try {
      this.a++
      await Promise.resolve(this.a)
    } catch (error) {
      console.error(error)
    }
  }

  c() {
    this.b()
  }
}

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
      d: new A(),
    }
  },
}
