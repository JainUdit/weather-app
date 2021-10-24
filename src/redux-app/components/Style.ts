import styled from '@emotion/styled';
import { Container, InputGroup, FormControl, Card } from 'react-bootstrap';
import weatherBg from '../../assets/weather-background.jpg';

export const StyledWeatherWrapper = styled('div')`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-image:url(${weatherBg});
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat';
`

export const StyledWeatherIcon = styled('div')`
    img {
        height: 150px;
        @media (max-width: 800px) {
            height: 100px;
        }
    }
`

export const StyledInputGroupWrapper = styled(InputGroup)`
    width: 70%;
    justify-content: center;
    margin-top: 40px;
`

export const StyledInputGroup = styled(InputGroup)`
    margin-top: 40px;
    width: 70%;
    @media (max-width: 800px) {
        width: 80%;
    }
`

export const StyledFormControl = styled(FormControl)`
    opacity: 0.5;
    color: black;
`

export const StyledWeatherDetails = styled(Container)`
    color: darkslategrey;
    padding-top: 60px;
    width: 70%;
    @media (max-width: 800px) {
        padding: 10px;
        width: 80%;
    }

    .weatherDetails {
        @media (max-width: 800px) {
            padding: 50px 0;
        }
    }
    .cityName {
        font-weight: 800;
        font-size: 50px;
        padding-top: 30px;
        @media (max-width: 800px) {
            font-size: 35px;
        } 
    }
    .day {
        @media (max-width: 800px) {
            font-size: 12px;
        }
    }
    .temp {
        font-size: 25px;
        padding-top: 30px;
        @media (max-width: 800px) {
            font-size: 30px;
            padding-top: 10px;
        }
    }
    .description {
        justify-content: center;
        text-transform: capitalize;
        margin-top: -30px;
        font-size: 15px;
        font-weight: 800;
        @media (max-width: 800px) {
            margin-top: 0;
            font-size: 12px;
        }
    }
    .humidity {
        margin-top: 10px;
        @media (max-width: 800px) {
            font-size: 13px;
        }
    }
    .wind {
        @media (max-width: 800px) {
            font-size: 13px;
        }
    }
    .unit {
        font-size: 13px;
        @media (max-width: 800px) {
            font-size: 11px;
        }
    }
`

export const StyledForecastWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    width: 70%;
    margin-top: 60px;

    @media (max-width: 800px) {
        width: 90%;
    }
    
    .carousel {
        display: flex;
        align-items: center;
        justify-content: center;
    }   
    .carousel-inner {
        width: 80%;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.hide-left-icon {
        .carousel-control-prev {
            display: none;
        }
    }
    &.hide-right-icon {
        .carousel-control-next {
            display: none;
        }
    }
`

export const StyledWeatherForecastIcon = styled('div')`
    img {
        height: 80px;
        @media (max-width: 800px) {
            height: 50px;
        }
    }
`

export const StyledCardWrapper = styled(Card)`
    background-color: rgba(245, 245, 245, 0.7);
    width: 120px;

    @media (max-width: 800px) {
        width: 80px;
    }
    .hour {
        font-size: 15px;
        @media (max-width: 800px) {
            font-size: 13px;
    }
    }
    .temprature {
        font-size: 18px;
        font-weight: 500;
        @media (max-width: 800px) {
            font-size: 15px;
        }
    }
`