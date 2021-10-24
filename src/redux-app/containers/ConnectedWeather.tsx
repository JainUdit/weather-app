import { connect } from "react-redux";
import { Dispatch } from "redux";
import { forecastRequest } from "../actions/ForecastActions";
import { weatherRequest } from "../actions/WeatherActions";
import { Weather } from "../components/Weather";
import { ICoordinates } from "../interfaces/ICoordinates";
import { IForecastWrapperState } from "../interfaces/IForecastWrapperState";
import { IWeatherGlobalState } from "../interfaces/IWeatherGlobalState";
import { IWeatherWrapperState } from "../interfaces/IWeatherWrapperState";

interface IStateProps {
    weather: IWeatherWrapperState;
    forecast: IForecastWrapperState;
}

interface IDispatchProps {
    callWeatherData: (city: string) => void;
    callForecastData: (coordinates: ICoordinates) => void;
}

const mapStateToProps = (state: IWeatherGlobalState): IStateProps => ({
    weather: state.weather,
    forecast: state.forecast
})

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    callWeatherData: (city: string) => dispatch(weatherRequest(city)),
    callForecastData: (coordinates: ICoordinates) => dispatch(forecastRequest(coordinates)),
})

export const ConnectedWeather: any = connect(mapStateToProps, mapDispatchToProps)(Weather);