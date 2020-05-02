import { calculateScore } from './calculateScore'

it('should calculate score', () => {
    const answers = {
        alone: true,
        contexts: true,
        singleton: true,
        list: true,
        listItem: true,
        complexity: true,
        hasAtoms: true,
        hasMolecules: true,
        embedInMolecule: true,
        embedInOrganism: true,
        wrapper: 'other',
    }
    const score = {
        o: 18,
        m: 17,
        a: 15,
    }
    expect(calculateScore(answers)).toStrictEqual(score)
})
