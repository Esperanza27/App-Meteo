const weatherMock = {
  coord: {
    lon: 9.0667,
    lat: 44.5,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 279.78,
    feels_like: 277.43,
    temp_min: 276.28,
    temp_max: 282.39,
    pressure: 1007,
    humidity: 60,
  },
  visibility: 10000,
  wind: {
    speed: 3.28,
    deg: 358,
    gust: 5.92,
  },
  clouds: {
    all: 20,
  },
  dt: 1705675110,
  sys: {
    type: 2,
    id: 49059,
    country: "IT",
    sunrise: 1705647284,
    sunset: 1705680801,
  },
  timezone: 3600,
  id: 3176217,
  name: "Provincia di Genova",
  cod: 200,
};

export {weatherMock};