import { getKeyByValue } from './getKeyByValue'

it('should get key by value from object', () => {
    const object = {
        o: 3,
        m: 2,
        a: 1,
    }
    expect(getKeyByValue(object, 3)).toBe('o')
    expect(getKeyByValue(object, 2)).toBe('m')
    expect(getKeyByValue(object, 1)).toBe('a')
})
