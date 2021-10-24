import { BaseAction } from "./BaseAction";
import { FETCH_FORECAST_FALIURE, FETCH_FORECAST_REQUEST, FETCH_FORECAST_SUCCESS } from "../constants/actionConstants";
import { IForecastState } from "../interfaces/IForecastState";
import { ICoordinates } from "../interfaces/ICoordinates";

/**
 * The interface here defines type for forecast actions.
 */
export interface IForecastRequestAction extends BaseAction<{ coordinates: ICoordinates }> { }
export interface IForecastSuccessAction extends BaseAction<IForecastState> { }
export interface IForecastErrorAction extends BaseAction<{ error: string }> { }

export const forecastRequest: (coordinates: ICoordinates) => IForecastRequestAction = (coordinates) => ({
    type: FETCH_FORECAST_REQUEST,
    payload: { coordinates }
});

export const forecastSuccess: (forecastData: IForecastState) => IForecastSuccessAction = (forecastData) => ({
    type: FETCH_FORECAST_SUCCESS,
    payload: forecastData
});

export const forecastError: (error: string) => IForecastErrorAction = (error) => ({
    type: FETCH_FORECAST_FALIURE,
    payload: { error }
});
