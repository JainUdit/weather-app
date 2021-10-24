import { ICoordinates } from "./ICoordinates";
import { IMainData } from "./IMainData";
import { IWeatherDetails } from "./IWeatherDetails";
import { IWindData } from "./IWindData";
/**
 * This interface defines weather data parent object details
 */
export interface IWeatherState {
    coord: ICoordinates;
    weather: Array<IWeatherDetails>;
    main: IMainData;
    visibility: number;
    wind: IWindData;
    dateTime: number;
    name: string;
}