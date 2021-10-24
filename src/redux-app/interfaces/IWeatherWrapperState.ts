import { IWeatherState } from "./IWeatherState";
/**
 * This interface defines the data needed for redux implementation of weather ajax calls
 */
export interface IWeatherWrapperState {
    weatherData: IWeatherState;
    isWeatherDataLoading: boolean;
    errorWeatherData: string;
}