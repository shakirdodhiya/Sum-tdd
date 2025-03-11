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

describe('Add function with "15\\n6" value passed', () => {
  it('Should return 21', () => {
    expect(add("15\n6")).toBe(21);
  })
})

// Delimiter '-'
describe('Add function with "//-10\\n6-5" value passed', () => {
  it('Should return 21', () => {
    expect(add("//-10\n6-5")).toBe(21);
  })
})

// Delimiter '.'
describe('Add function with "//.10\\n6.5" value passed', () => {
  it('Should return 21', () => {
    expect(add("//.10\n6.5")).toBe(21);
  })
})

// Delimiter '@'
describe('Add function with "//@10\\n6@5" value passed', () => {
  it('Should return 21', () => {
    expect(add("//@10\n6@5")).toBe(21);
  })
})

describe('Add function with "15,-6,1,-5,2" value passed', () => {
  it('Should return "negative numbers not allowed -6,-5"', () => {
    expect(add("15,-6,1,-5,2")).toBe("negative numbers not allowed -6,-5");
  })
})