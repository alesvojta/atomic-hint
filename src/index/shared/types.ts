export type TScore = { o: number; m: number; a: number }

export type TWrapper = (v: string) => TScore
export type TWrapperElements = { [element: string]: TScore }

export type TResult = (v: boolean) => TScore
export type TQuestionMap = { [key: string]: TResult | TWrapper }
