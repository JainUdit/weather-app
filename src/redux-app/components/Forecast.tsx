import { useEffect, useState } from "react";
import moment from 'moment';
import { Carousel, Card, Container, Spinner } from "react-bootstrap";
import { ICoordinates } from "../interfaces/ICoordinates";
import { IForecastHourlyData } from "../interfaces/IForecastHourlyData";
import { IForecastWrapperState } from "../interfaces/IForecastWrapperState";
import { isTablet, weatherImageSelection } from "../services/utils";
import { StyledForecastWrapper, StyledWeatherForecastIcon, StyledCardWrapper } from "./Style";

interface IProps {
    coordinates: ICoordinates
    forecast: IForecastWrapperState;
    callForecastData: (coordinates: ICoordinates) => void;
}

export const Forecast = ({ coordinates, forecast, callForecastData }: IProps): React.ReactElement => {
    const { forecastData, isForecastDataLoading } = forecast;
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        coordinates && coordinates.lat && coordinates.lon && callForecastData(coordinates);
    }, [coordinates])

    const handleSelect = (selectedIndex: number) => {
        console.log(selectedIndex);
        setIndex(selectedIndex);
    };

    const renderCarouselItem = (start: number, end: number): React.ReactElement => (
        <div className="d-flex flex-row">
            {forecastData?.hourly?.slice(start, end)?.map((hourData: IForecastHourlyData) => {
                let weatherIcon = weatherImageSelection(hourData?.weather?.[0].main);
                let hour = moment(hourData.dt * 1000).format("hh a");
                return (
                    <StyledCardWrapper key={hourData?.dt}>
                        <Card.Body>
                            <span className="hour">{hour}</span>
                            <StyledWeatherForecastIcon>{weatherIcon}</StyledWeatherForecastIcon>
                            <span className="temprature">{hourData.temp}&deg;</span>
                        </Card.Body>
                    </StyledCardWrapper>)
            })}
        </div>
    )

    return (
        <StyledForecastWrapper className={`${index === 0 ? 'hide-left-icon' : ''} ${index === (isTablet() ? 5 : 2) ? 'hide-right-icon' : ''}`}>
            {isForecastDataLoading
                ?
                <Container fluid className="d-flex justify-content-center align-items-center h-100">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
                :
                <>
                    {isTablet()
                        ?
                        <Carousel variant="dark" interval={null} indicators={false} activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>{renderCarouselItem(0, 4)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(4, 8)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(8, 12)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(12, 16)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(16, 20)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(20, 24)}</Carousel.Item>
                        </Carousel>
                        :
                        <Carousel variant="dark" interval={null} indicators={false} activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>{renderCarouselItem(0, 8)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(8, 16)}</Carousel.Item>
                            <Carousel.Item>{renderCarouselItem(16, 24)}</Carousel.Item>
                        </Carousel>
                    }
                </>
            }
        </StyledForecastWrapper >
    )
}