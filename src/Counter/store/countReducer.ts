export type initialStateType = {
    count: number
    minCount: number
    maxCount: number
    error: string
    disable: boolean
}
const initialState: initialStateType = {
    count: 0,
    minCount: 0,
    maxCount: 0,
    error:'',
    disable: false
}


export const countReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC":
            return {...state, count: state.count + 1}
        case "RES":
            return {...state, count: state.minCount}
        case "SET-MIN": {
            let error: string = (action.value < 0 || action.value >= state.maxCount) ? 'Значение не коректо' : 'Нажмите set'
            console.log(error)
            return {...state, minCount: action.value, error:error, disable: false}
        }
        case "SET-MAX": {
            let error: string = (action.value < 0 || state.minCount >= action.value) ? 'Значение не коректо' : 'Нажмите set'
            return {...state, maxCount: action.value, error:error, disable: false}
        }
        case "SET-COUNT": {
            return {...state, count: state.minCount, disable: true, error: ''}
        }
        default:
            return state
    }
}


export const incValue = () => {
    return {
        type: 'INC'
    } as const
}
export const resValue = () => {
    return {
        type: 'RES'
    } as const
}
export const setMinValue = (value: number) => {
    return {
        type: 'SET-MIN',
        value
    } as const
}
export const setMaxValue = (value: number) => {
    return {
        type: 'SET-MAX',
        value
    } as const
}
export const setCountValue = () => {
    return {
        type: 'SET-COUNT',
    } as const
}

type ActionType = ReturnType<typeof incValue>
    | ReturnType<typeof resValue>
    | ReturnType<typeof setMinValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setCountValue>


