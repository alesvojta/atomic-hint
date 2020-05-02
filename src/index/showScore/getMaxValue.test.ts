import { getMaxValue } from './getMaxValue'

it('should get max value from object', () => {
    const score = {
        o: 3,
        m: 2,
        a: 1,
    }
    expect(getMaxValue(score)).toBe(3)
})
