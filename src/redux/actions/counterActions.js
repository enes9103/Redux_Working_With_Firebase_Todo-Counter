import { DECREASE_COUNTER, INCREASE_COUNTER, RESET } from "../types/counterTypes"

export const increase = () => {
    return {
        type : INCREASE_COUNTER
    }
}

export const decrease = () => {
    return {
        type : DECREASE_COUNTER
    }
}

export const reset = () => {
    return {
        type : RESET
    }
}