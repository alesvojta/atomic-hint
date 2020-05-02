import { TScore } from './shared/types'
import { showScore } from './showScore'
import { yellow } from 'chalk'
import SpyInstance = jest.SpyInstance

let spy: SpyInstance

beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation((string: string) => string.toString())
})

afterEach(() => {
    spy.mockRestore()
})

it('should show correct score', () => {
    const score: TScore = {
        o: 3,
        m: 2,
        a: 1,
    }
    showScore(score)
    expect(spy).toHaveBeenCalledWith(`Atom: 1; Molecule: 2; ${yellow.bold(`Organism: 3`)}`)
})
