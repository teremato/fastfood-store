import { changeMode } from "../../../redux/action/vision"
import { Category } from "../../../Constans/Category"

// functions
export const visionMode = (tag: string | undefined, dispatch : any) => {dispatch(changeMode(tag))}
export const categoryTitle = (tag: string | undefined) : string => {
    if(tag === Category.BURGERS) {return 'Бургеры'}
    else if(tag === Category.SNACKS) {return 'Снеки'}
    else if(tag === Category.DRINKS) {return 'Напитки'}
    else return ''
}


