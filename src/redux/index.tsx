import { combineReducers, legacy_createStore as createStore } from "redux";
import { shopReducer } from "./reducers/shopReducer";
import { visionCategory } from "./reducers/visionReducer";

const rootReducer = combineReducers({
    data: shopReducer,
    vision: visionCategory
})

const store = createStore(rootReducer);


export type RootState = ReturnType<typeof rootReducer>
export default store;
