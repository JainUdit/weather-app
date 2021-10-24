import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedWeather } from './redux-app/containers/ConnectedWeather';

const App = (): React.ReactElement => {
  return (
    <Container fluid className='p-0'>
      <ConnectedWeather />
    </Container>
  );
}

export default App;
