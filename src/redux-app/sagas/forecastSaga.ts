import { call, put } from "@redux-saga/core/effects";
import { forecastError, forecastSuccess, IForecastRequestAction } from "../actions/ForecastActions";
import { ICoordinates } from "../interfaces/ICoordinates";
import { IForecastState } from "../interfaces/IForecastState";

const fetchForecastData = (coord: ICoordinates): Promise<Response> => {
    const url = `${process.env.REACT_APP_API_URL}/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=currently,minutely,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    return fetch(url).then(data => data.json());
}

export function* fetchForecastSaga(action: IForecastRequestAction): any {
    try {
        const forecastResponse: IForecastState = yield call(fetchForecastData, action.payload.coordinates);
        yield put(forecastSuccess(forecastResponse));
    } catch (error: any) {
        yield put(forecastError(error.toString()));
    }
}