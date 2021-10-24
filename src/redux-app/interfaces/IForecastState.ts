import { IForecastHourlyData } from "./IForecastHourlyData";
/**
 * This interface defines forecast data object
 */
export interface IForecastState {
    lon: number;
    lat: number;
    hourly: Array<IForecastHourlyData>;
}