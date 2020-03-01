import { Answers } from 'inquirer'
import { Score, scoreReducer } from '../shared/scoreReducer'
import { questionsMap } from '../shared/questions'

const initialScore: Score = { o: 0, m: 0, a: 0 }

export function calculateScore(answers: Answers): Score {
    const scores = Object.keys(answers).map((k: string) => {
        const values = questionsMap[k] as (k: boolean | string) => Score
        return values(answers[k])
    })
    return scores.reduce(scoreReducer, initialScore)
}
