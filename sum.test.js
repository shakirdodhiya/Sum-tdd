const { add } = require('./sum');

describe('Add function with blank("") value passed', () => {
  it('Should return 0', () => {
    expect(add("")).toBe(0);
  })
})

describe('Add function with "15,6" value passed', () => {
  it('Should return 21', () => {
    expect(add("15,6")).toBe(21);
  })
})