const config = {
  API: {
    base: 'https://api.weatherbit.io/v2.0/forecast/',
    type: 'daily',
    key: '01184eace09548a0bcb4408b167ea145'
  },
  DAYS_TO_SHOW: 7,
  BOARDS: [
    {
      id: 1,
      title: 'Good things',
      color: '#0ac0c0'
    },
    {
      id: 2,
      title: 'Bad things',
      color: '#cf5555'
    },
    {
      id: 3,
      title: 'Action items',
      color: '#4b3baa'
    }
  ]
};

export default config;
