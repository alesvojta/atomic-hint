import { TScore, TQuestionMap, TWrapper, TWrapperElements } from '../index/shared/types'

const result = (yes: TScore, no: TScore) => (value: boolean): TScore => (value ? yes : no)

export const wrapperElements: TWrapperElements = {
    section: { o: 3, m: 2, a: 0 },
    article: { o: 2, m: 3, a: 0 },
    aside: { o: 2, m: 2, a: 1 },
    nav: { o: 4, m: 1, a: 0 },
    li: { o: 0, m: 4, a: 1 },
    a: { o: 0, m: 2, a: 3 },
    button: { o: 0, m: 1, a: 4 },
    div: { o: 0, m: 1, a: 4 },
    other: { o: 0, m: 0, a: 0 }
}

const wrapper: TWrapper = (index: string) => wrapperElements[index]

export const questionsMap: TQuestionMap = {
    alone: result({ o: 4, m: 1, a: 0 }, { o: 0, m: 2, a: 3 }),
    contexts: result({ o: 0, m: 2, a: 3 }, { o: 3, m: 2, a: 0 }),
    singleton: result({ o: 0, m: 0, a: 5 }, { o: 2, m: 2, a: 1 }),
    list: result({ o: 4, m: 1, a: 0 }, { o: 1, m: 2, a: 2 }),
    listItem: result({ o: 0, m: 4, a: 1 }, { o: 2, m: 1, a: 2 }),
    complexity: result({ o: 4, m: 1, a: 0 }, { o: 0, m: 2, a: 3 }),
    hasAtoms: result({ o: 2, m: 3, a: 0 }, { o: 2, m: 1, a: 2 }),
    hasMolecules: result({ o: 4, m: 1, a: 0 }, { o: 0, m: 2, a: 3 }),
    embedInMolecule: result({ o: 0, m: 1, a: 4 }, { o: 3, m: 2, a: 0 }),
    embedInOrganism: result({ o: 0, m: 3, a: 2 }, { o: 3, m: 1, a: 1 }),
    wrapper
}

export const questions = [
    {
        type: 'confirm',
        name: 'alone',
        message: 'Will the component only ever be used once per page?'
    },
    {
        type: 'confirm',
        name: 'contexts',
        message: 'Do you expect to use the component in multiple different contexts?'
    },
    {
        type: 'confirm',
        name: 'singleton',
        message: 'Does the component consist of only a single element?'
    },
    {
        type: 'confirm',
        name: 'list',
        message: 'Does the component contain a list of repeating components?'
    },
    {
        type: 'confirm',
        name: 'listItem',
        message: 'Is the component an item in a list of components?'
    },
    {
        type: 'confirm',
        name: 'complexity',
        message: 'Is the component large and complex?'
    },
    {
        type: 'confirm',
        name: 'hasAtoms',
        message: 'Are there any atom components embedded into the component?'
    },
    {
        type: 'confirm',
        name: 'hasMolecules',
        message: 'Are there any molecule components embedded into the component?'
    },
    {
        type: 'confirm',
        name: 'embedInMolecule',
        message: 'Is or will the component ever be embedded inside a molecule component?'
    },
    {
        type: 'confirm',
        name: 'embedInOrganism',
        message: 'Is or will the component ever be embedded inside an organism component?'
    },
    {
        type: 'list',
        name: 'wrapper',
        message: 'What element is the outer wrapper for the component?',
        choices: Object.keys(wrapperElements)
    }
]
