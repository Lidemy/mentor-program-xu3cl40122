import {add} from './hw5'

describe("hw5", () => {
  it("should return correct answer when a=10 and b=10", () => {
    expect(add('10', '10')).toBe('20')
  })
  it("12312383813881381381",() => {
    expect(add("12312383813881381381","129018313819319831")).toBe("12441402127700701212")
  })
})
