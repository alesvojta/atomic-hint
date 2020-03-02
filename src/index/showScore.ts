import { Score } from './shared/scoreReducer'

export function showScore({ o, m, a }: Score) {
    console.log(`Atom: ${a}; Molecule: ${m}; Organism: ${o}`)
}
