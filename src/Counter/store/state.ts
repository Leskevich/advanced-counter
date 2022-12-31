import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./countReducer";


const rootReducer = combineReducers({
    count: countReducer
})

export type StoreType = ReturnType<typeof rootReducer>

export const store=legacy_createStore(rootReducer)