const { add } = require('./sum');

describe('Check blank("") value', () => {
  it('Should return 0', () => {
    expect(add("")).toBe(0);
  })
})

describe('2 numbers passed', () => {
  it('Should return 21', () => {
    expect(add("15,6")).toBe(21);
  })
})

describe('Numbers with "\\n"', () => {
  it('Should return 21', () => {
    expect(add("15\n6")).toBe(21);
  })
})

// Delimiter '-'
describe('Numbers with custom delimiter "-"', () => {
  it('Should return 21', () => {
    expect(add("//-10\n6-5")).toBe(21);
  })
})

// Delimiter '.'
describe('Numbers with custom delimiter "."', () => {
  it('Should return 21', () => {
    expect(add("//.10\n6.5")).toBe(21);
  })
})

// Delimiter '@'
describe('Numbers with custom delimiter "@"', () => {
  it('Should return 21', () => {
    expect(add("//@10\n6@5")).toBe(21);
  })
})

describe('Check negative numbers', () => {
  it('Should return "negative numbers not allowed -6,-5"', () => {
    expect(add("15,-6,1,-5,2")).toBe("negative numbers not allowed -6,-5");
  })
})

describe('Ignore value greater than 1000', () => {
  it('Should return 21', () => {
    expect(add("15,6,1221")).toBe(21);
  })
})