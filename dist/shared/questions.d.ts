import { Score } from './scoreReducer';
export declare type TResult = (v: boolean) => Score;
declare type TWrapperElements = {
    [element: string]: Score;
};
export declare const wrapperElements: TWrapperElements;
export declare type TWrapper = (v: string) => Score;
export declare type TQuestionMap = {
    [key: string]: TResult | TWrapper;
};
export declare const questionsMap: TQuestionMap;
export declare const questions: ({
    type: string;
    name: string;
    message: string;
    choices?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: string[];
})[];
export {};
