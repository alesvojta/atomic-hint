import { prompt } from 'inquirer'
import { Score } from './shared/scoreReducer'
import { questions } from './shared/questions'
import { calculateScore } from './index/calculateScore'

function showScore({ o, m, a }: Score) {
    console.log(`Atom: ${a}; Molecule: ${m}; Organism: ${o}`)
}

export default function(): void {
    prompt(questions)
        .then(calculateScore)
        .then(showScore)
        .catch(console.log)
}
