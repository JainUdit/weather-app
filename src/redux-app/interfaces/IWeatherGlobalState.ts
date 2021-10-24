import { IForecastWrapperState } from "./IForecastWrapperState";
import { IWeatherWrapperState } from "./IWeatherWrapperState";
/**
 * This interface defines the Global State for store of redux.
 */
export interface IWeatherGlobalState {
    weather: IWeatherWrapperState,
    forecast: IForecastWrapperState
}