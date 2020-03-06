import { yellow } from 'chalk'
import { getMaxValue } from './showScore/getMaxValue'
import { getKeyByValue } from './showScore/getKeyByValue'
import { TScore } from './shared/types'

export function showScore(score: TScore) {
    const { o, m, a } = score
    const maxVal = getMaxValue(score)
    const maxKey = getKeyByValue(score, maxVal)

    if (maxKey === 'a') {
        console.log(`${yellow.bold(`Atom: ${a}`)}; Molecule: ${m}; Organism: ${o}`)
    } else if (maxKey === 'm') {
        console.log(`Atom: ${a}; ${yellow.bold(`Molecule: ${m}`)}; Organism: ${o}`)
    } else {
        console.log(`Atom: ${a}; Molecule: ${m}; ${yellow.bold(`Organism: ${o}`)}`)
    }
}
