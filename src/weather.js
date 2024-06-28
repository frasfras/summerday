export const weatherTypes = {
  SUNNY: 'Sunny',
  CLOUDY: 'Cloudy',
  RAINY: 'Rainy',
  WINDY: 'Windy',
};

export const weatherEffects = {
  [weatherTypes.SUNNY]: { energyCostMultiplier: 1.2, funGainMultiplier: 1.5 },
  [weatherTypes.CLOUDY]: { energyCostMultiplier: 1, funGainMultiplier: 1 },
  [weatherTypes.RAINY]: { energyCostMultiplier: 0.8, funGainMultiplier: 0.7 },
  [weatherTypes.WINDY]: { energyCostMultiplier: 1.1, funGainMultiplier: 1.2 },
};

export const getRandomWeather = () => {
  const weathers = Object.values(weatherTypes);
  return weathers[Math.floor(Math.random() * weathers.length)];
};