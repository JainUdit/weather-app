import { IForecastState } from "./IForecastState";
/**
 * This interface defines the data needed for redux implementation of forecast ajax calls
 */
export interface IForecastWrapperState {
    forecastData: IForecastState;
    isForecastDataLoading: boolean;
    errorForecastData: string;
}