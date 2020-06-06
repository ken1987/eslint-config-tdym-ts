import js2 from './js2'

class A {
  a = 1

  async b() {
    this.a++
    await (this.a + js2.a)
  }

  c() {
    this.b()
  }
}

export default {
  a() {
    return new A()
  },
}
