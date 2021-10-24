import { weatherImages } from '../constants/imageConstants';

export const weatherImageSelection = (weather: string) => {
    switch (weather) {
        case 'Thunderstorm':
            return <img src={weatherImages.thunder} alt='Thunder' />;
        case 'Drizzle':
            return <img src={weatherImages.drizzle} alt='Drizzle' />;
        case 'Rain':
            return <img src={weatherImages.rain} alt='Rain' />
        case 'Snow':
            return <img src={weatherImages.snow} alt='Snow' />
        case 'Clear':
            return <img src={weatherImages.sunny} alt='Clear' />
        case 'Clouds':
            return <img src={weatherImages.clouds} alt='Clouds' />

        default:
            return <img src={weatherImages.sunny} alt='Clear' />
    }
}

export const isMobile = () => typeof window !== 'undefined' && window.matchMedia(`(max-width: 767px)`).matches;
export const isTablet = () => typeof window !== 'undefined' && window.matchMedia(`(max-width: 991px)`).matches;