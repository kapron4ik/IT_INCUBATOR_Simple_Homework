const initState = {
    loading: false
}

type StateType = {
    loading: boolean
}

export const loadingReducer = (state:StateType = initState, action: DispatchActionType): StateType => { // fix any
    switch (action.type) {
        case 'isLoading': {
            return {
                ...state,
                loading: action.value
            }
        }
        default: return state
    }
}

export const loadingAC = (value: boolean) => {
    return {
        type: "isLoading",
        value
    } as const
} // fix any

export type DispatchActionType = ReturnType<typeof loadingAC>