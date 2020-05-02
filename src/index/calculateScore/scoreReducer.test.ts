import { scoreReducer } from './scoreReducer'

it('should reduce score', () => {
    const scoreA = {
        o: 1,
        m: 1,
        a: 1,
    }
    const scoreB = {
        o: 0,
        m: 1,
        a: 2,
    }
    const scoreC = {
        o: 1,
        m: 2,
        a: 3,
    }
    expect(scoreReducer(scoreA, scoreB)).toStrictEqual(scoreC)
})
