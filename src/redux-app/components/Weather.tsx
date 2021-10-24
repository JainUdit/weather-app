import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Button, Container, Spinner, Row, Col } from 'react-bootstrap';
import { IWeatherWrapperState } from '../interfaces/IWeatherWrapperState';
import { StyledWeatherIcon, StyledWeatherWrapper, StyledInputGroup, StyledFormControl, StyledWeatherDetails } from './Style';
import { IForecastWrapperState } from '../interfaces/IForecastWrapperState';
import { ICoordinates } from '../interfaces/ICoordinates';
import { Forecast } from './Forecast';
import { weatherImageSelection } from '../services/utils';

interface IProps {
    weather: IWeatherWrapperState;
    callWeatherData: (city: string) => void;
    forecast: IForecastWrapperState;
    callForecastData: (coordinates: ICoordinates) => void;
}

export const Weather = ({ weather, callWeatherData, forecast, callForecastData }: IProps): React.ReactElement => {
    const [cityName, setCityName] = useState('London');
    const { weatherData, isWeatherDataLoading } = weather;
    useEffect(() => {
        callWeatherData(cityName);
    }, []);

    let weatherIcon = weatherImageSelection(weatherData?.weather?.[0].main);

    return (
        <StyledWeatherWrapper className="d-flex flex-column align-items-center">
            <StyledInputGroup>
                <StyledFormControl
                    placeholder="City name"
                    aria-label="City name"
                    onChange={(event) => setCityName(event.target.value)}
                />
                <Button variant="secondary" onClick={() => callWeatherData(cityName)}   >
                    Button
                </Button>
            </StyledInputGroup>
            {isWeatherDataLoading
                ?
                <Container fluid className="d-flex justify-content-center align-items-center h-100">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
                :
                <>
                    <StyledWeatherDetails fluid className="d-flex">
                        <Row className="w-100">
                            <Col lg={6} className="d-flex flex-column">
                                <span className="cityName">{weatherData?.name}</span>
                                <span className="day">{moment().format('LL')}</span>
                                <span className="day">{moment().format('dddd')}</span>
                            </Col>
                            <Col lg={6} className="weatherDetails">
                                <Row className="w-100 align-items-lg-end">
                                    <Col xs={6} lg={12} className="d-flex flex-row align-items-center justify-content-lg-end">
                                        <StyledWeatherIcon>{weatherIcon}</StyledWeatherIcon>
                                        <span className="temp">{Math.round(weatherData?.main?.temp)}&deg;</span>
                                    </Col>
                                    <Col xs={6} lg={12} className="d-flex align-items-end justify-content-lg-end justify-content-center p-0">
                                        <div className="d-flex flex-column align-items-lg-start align-items-xs-end justify-content-lg-start justify-content-center">
                                            <span className="description">{weatherData?.weather?.[0]?.description}</span>
                                            <span className="humidity">Humidity: {weatherData?.main?.humidity} <span className="unit">%</span></span>
                                            <span className="wind">Wind: {weatherData?.wind?.speed} <span className="unit">km/h</span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </StyledWeatherDetails>
                    <Forecast forecast={forecast} callForecastData={callForecastData} coordinates={weatherData?.coord} />
                </>
            }
        </StyledWeatherWrapper>
    )
}
