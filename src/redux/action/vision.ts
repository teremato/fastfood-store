import { IAction } from "../../types/action";

export enum VisionAction {
    CHANGE_MODE = 'CHANGE_MODE',
}

export const changeMode = (payload: any) : IAction => {return {type: VisionAction.CHANGE_MODE, payload}}