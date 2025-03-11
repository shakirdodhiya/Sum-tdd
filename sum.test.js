const { add } = require('./sum');

describe('Add function with blank("") value passed', () => {
  it('Should return 0', () => {
    expect(add("")).toBe(0);
  })
})