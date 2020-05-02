import { TScore } from '../shared/types'

export function scoreReducer(prev: TScore, curr: TScore): TScore {
    return {
        o: prev.o + curr.o,
        m: prev.m + curr.m,
        a: prev.a + curr.a,
    }
}
