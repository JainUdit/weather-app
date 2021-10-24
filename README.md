
# Weather-App

Application to provide weather data and 24 hour forecast for cities input by the user.

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/JainUdit/weather-app.git

# go into app's directory
$ cd weather-app

# install app's dependencies
$ npm install
```


### Basic usage

``` bash


# dev server with hot reload at http://localhost:3000
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to run the application

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
weather-app
├── public/          #static files
│   └── index.html   #html template
│
├── src/  #project root
│   ├── App.js
│   ├── index.js
|   ├── assets   # folder to store app resources
|   └── redux-app   # redux data
|       |-- action/     # folder to handle module action
|       ├── components/  # views source
|       ├── constants/  # contains constants
│       ├── containers/  # container source - template layout
│       ├── interfaces/  # object definitions
|       |-- reducers/   # folder to handle dispatch payload
|       |-- store/      # template state example 
│       └── services      # folder to handle helpers
│           └── utils.js   # helper functions
└── package.json

```
