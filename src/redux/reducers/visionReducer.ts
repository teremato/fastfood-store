import { IAction } from "../../types/action"
import { IVision } from "../../types/vision"
import { VisionAction } from "../action/vision"

const initState : IVision = {
    vision: 'burgers'
}

export const visionCategory = (state = initState, action : IAction) : IVision => {
    switch (action.type) {
        case VisionAction.CHANGE_MODE:
            return {...state, vision: action.payload}
        default: return state
    }
}