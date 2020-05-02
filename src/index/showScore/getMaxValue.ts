import { TScore } from '../shared/types'

export function getMaxValue(object: TScore) {
    const values = Object.values(object)
    return Math.max(...values)
}
