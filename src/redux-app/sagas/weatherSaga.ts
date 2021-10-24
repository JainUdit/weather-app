import { call, put } from "@redux-saga/core/effects";
import { IWeatherRequestAction, weatherError, weatherSuccess } from "../actions/WeatherActions";
import { IWeatherState } from "../interfaces/IWeatherState";

const fetchWeatherData = (city: string): Promise<Response> => {
    const url = `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    return fetch(url).then(data => data.json());
}

export function* fetchWeatherSaga(action: IWeatherRequestAction): any {
    try {
        const weatherResponse: IWeatherState = yield call(fetchWeatherData, action.payload.city);
        yield put(weatherSuccess(weatherResponse));
    } catch (error: any) {
        yield put(weatherError(error.toString()));
    }
}