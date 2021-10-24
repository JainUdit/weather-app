import { Reducer } from "redux";
import { BaseAction } from "../actions/BaseAction";
import { FETCH_FORECAST_FALIURE, FETCH_FORECAST_REQUEST, FETCH_FORECAST_SUCCESS } from "../constants/actionConstants";
import { IForecastWrapperState } from "../interfaces/IForecastWrapperState";

export const forecastReducer: Reducer<IForecastWrapperState, BaseAction<any>> = (
    state: IForecastWrapperState = {} as IForecastWrapperState,
    action: BaseAction<any>
): IForecastWrapperState => {
    switch (action.type) {
        case FETCH_FORECAST_REQUEST:
            return { ...state, isForecastDataLoading: true }
        case FETCH_FORECAST_SUCCESS:
            return { ...state, forecastData: action.payload, isForecastDataLoading: false };
        case FETCH_FORECAST_FALIURE:
            return { ...state, errorForecastData: action.payload.error, isForecastDataLoading: false };

        default:
            return state;
    }
}