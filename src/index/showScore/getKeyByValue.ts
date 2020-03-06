import { TScoreValue } from '../shared/types'

export function getKeyByValue(object: TScoreValue, value: number) {
    return Object.keys(object).find(key => object[key] === value)
}
