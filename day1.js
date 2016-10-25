function whatFloor () {
}

describe('Day1', () => {
  const cases = {
    '(())': 0,
    '(((': 3,
    '(()(()(': 3,
    '))(((((': 3,
    '())': -1,
    '))(': -1,
    ')))': -3,
    ')())())': -3,
  }
  Object.keys(cases).map(input => {
    const expected = cases[input]
    describe(`given ${input}`, () => {
      it(`returns ${expected}`, () => {
        expect(whatFloor(input)).to.equal(expected)
      })
    })
  })
})
