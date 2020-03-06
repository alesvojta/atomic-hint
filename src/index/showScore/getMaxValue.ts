import { TScoreValue } from '../shared/types'

export function getMaxValue(object: TScoreValue) {
    const values = Object.values(object)
    return Math.max(...values)
}
