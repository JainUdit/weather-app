import { Reducer } from "redux";
import { BaseAction } from "../actions/BaseAction";
import { FETCH_WEATHER_FALIURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "../constants/actionConstants";
import { IWeatherWrapperState } from "../interfaces/IWeatherWrapperState";

export const weatherReducer: Reducer<IWeatherWrapperState, BaseAction<any>> = (
    state: IWeatherWrapperState = {} as IWeatherWrapperState,
    action: BaseAction<any>
): IWeatherWrapperState => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return { ...state, isWeatherDataLoading: true }
        case FETCH_WEATHER_SUCCESS:
            return { ...state, weatherData: action.payload, isWeatherDataLoading: false };
        case FETCH_WEATHER_FALIURE:
            return { ...state, errorWeatherData: action.payload.error, isWeatherDataLoading: false };

        default:
            return state;
    }
}