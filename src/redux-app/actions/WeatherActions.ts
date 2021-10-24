import { BaseAction } from "./BaseAction";
import { FETCH_WEATHER_FALIURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "../constants/actionConstants";
import { IWeatherState } from "../interfaces/IWeatherState";

/**
 * The interface here defines type for weather actions.
 */
export interface IWeatherRequestAction extends BaseAction<{ city: string }> { }
export interface IWeatherSuccessAction extends BaseAction<IWeatherState> { }
export interface IWeatherErrorAction extends BaseAction<{ error: string }> { }

export const weatherRequest: (city: string) => IWeatherRequestAction = (city) => ({
    type: FETCH_WEATHER_REQUEST,
    payload: { city }
});

export const weatherSuccess: (weatherData: IWeatherState) => IWeatherSuccessAction = (weatherData) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weatherData
});

export const weatherError: (error: string) => IWeatherErrorAction = (error) => ({
    type: FETCH_WEATHER_FALIURE,
    payload: { error }
});
