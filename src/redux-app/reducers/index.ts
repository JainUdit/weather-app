import { combineReducers } from "redux";
import { forecastReducer } from "./forecastReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    forecast: forecastReducer
})