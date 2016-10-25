function whatFloor () {
}

describe('Day1', () => {
  describe('whatFloor', () => {
    const floorCases = {
      '(())': 0,
      '(((': 3,
      '(()(()(': 3,
      '))(((((': 3,
      '())': -1,
      '))(': -1,
      ')))': -3,
      ')())())': -3,
    }
    Object.keys(floorCases).map(input => {
      const expected = floorCases[input]
      describe(`given ${input}`, () => {
        it(`returns ${expected}`, () => {
          expect(whatFloor(input)).to.equal(expected)
        })
      })
    })
  })

  describe('basementPosition', () => {
    const basementCases = {
      ')': 1,
      '()())': 5,
    }
    Object.keys(basementCases).forEach(input => {
      const expected = basementCases[input]
      describe(`given ${input}`, () => {
        it(`returns ${expected}`, () => {
          expect(basementPosition(input)).to.equal(expected)
        })
      })
    })
  })
})
