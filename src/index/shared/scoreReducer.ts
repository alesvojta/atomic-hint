export type Score = { o: number; m: number; a: number }

export function scoreReducer(prev: Score, curr: Score): Score {
    return {
        o: prev.o + curr.o,
        m: prev.m + curr.m,
        a: prev.a + curr.a
    }
}
