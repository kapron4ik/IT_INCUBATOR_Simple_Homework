import {initialPeople, UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType> = initialPeople, action: DispathActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const compareStrings = (a:UserType, b:UserType) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }
            if (action.payload === "up"){
                return [...state.sort(compareStrings)]
            }
            if (action.payload === "down"){
                return [...state.sort(compareStrings).reverse()]
            }
            return state
        }
        case 'check': {
            return [...state.filter(u => u.age >= action.payload)]
        }
        default: return state
    }
}

export const sortNameUpAC = () => {
    return {
        type: "sort",
        payload: 'up'
    } as const
}

export const sortNameDownAC = () => {
    return {
        type: "sort",
        payload: 'down'
    } as const
}

export const checkAgeAC = (payload: number) => {
    return {
        type: "check",
        payload
    } as const
}

type DispathActionType = ReturnType<typeof sortNameUpAC> |
    ReturnType<typeof sortNameDownAC> |
    ReturnType<typeof checkAgeAC>