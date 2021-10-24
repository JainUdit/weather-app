import { IWeatherDetails } from "./IWeatherDetails";
/**
 * This interface defines forecast hourly data
 */
export interface IForecastHourlyData {
    dt: number;
    temp: number;
    weather: Array<IWeatherDetails>;
}