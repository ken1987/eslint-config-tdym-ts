class A {
  a = 1

  b() {
    console.log(this.a)
  }

  c() {
    this.a = 2
    this.b()

    window.addEventListener('error', this.b.bind(this))
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
