import { all, takeLatest } from "@redux-saga/core/effects";
import { FETCH_FORECAST_REQUEST, FETCH_WEATHER_REQUEST } from "../constants/actionConstants";
import { fetchForecastSaga } from "./forecastSaga";
import { fetchWeatherSaga } from "./weatherSaga";

export function* rootSaga() {
    yield all([
        takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga),
        takeLatest(FETCH_FORECAST_REQUEST, fetchForecastSaga)
    ])
}