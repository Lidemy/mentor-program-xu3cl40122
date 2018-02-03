import {isPrime} from './hw3'

describe("hw3", () => {
  it("should return correct answer when n = 1", () => {
    expect(isPrime(1)).toBe(false)
  })
  it("7",() =>{
  	expect(isPrime(7)).toBe(true)
  })
  it("20",() => {
  	expect(isPrime(20)).toBe(false)
  })
})