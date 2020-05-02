import { TScore } from '../shared/types'

export function getKeyByValue(object: TScore, value: number) {
    return Object.keys(object).find((key) => object[key as keyof TScore] === value)
}
