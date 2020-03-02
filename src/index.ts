import { prompt } from 'inquirer'
import { questions } from './shared/questions'
import { calculateScore } from './index/calculateScore'
import { showScore } from './index/showScore'

export default function(): void {
    prompt(questions)
        .then(calculateScore)
        .then(showScore)
        .catch(console.log)
}
