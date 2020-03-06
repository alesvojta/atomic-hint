import { Answers } from 'inquirer'
import { scoreReducer } from './calculateScore/scoreReducer'
import { questionsMap } from '../shared/questions'
import { TScore } from './shared/types'

const initialScore: TScore = { o: 0, m: 0, a: 0 }

export function calculateScore(answers: Answers): TScore {
    const scores = Object.keys(answers).map((k: string) => {
        const values = questionsMap[k] as (k: boolean | string) => TScore
        return values(answers[k])
    })
    return scores.reduce(scoreReducer, initialScore)
}
