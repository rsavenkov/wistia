const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING != 1;
  const isTest = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING == 1;

  console.log('|-----------------|');
  console.log(`|Environment: ${isDev ? ' DEV' : isProd ? 'PROD' : isTest ? 'TEST' : 'UNKNOW'}|`);
  console.log('|-----------------|');

  const env = {
    URL: (() => {
      if (isDev) return 'http://localhost:8080';
      if (isProd) return 'https://mirvracha.ru';
      if (isTest) return 'https://test.mirvracha.ru';
    })(),
    toEmail: (() => {
      if (isDev || isTest) return 'n.lebedev@mirvracha.ru';
      if (isProd) return 'servier.services@gmail.com';
    })(),
    pdfFolder: 'https://mirvracha.ru/external/diabeton/pdf',
    GA_ID: (() => {
      if (isDev) return '';
      if (isProd) return 'UA-88559770-1';
      if (isTest) return 'UA-88559770-2';
    })(),
    YM_ID: (() => {
      if (isDev) return '';
      if (isProd) return '41407554';
      if (isTest) return '42792929';
    })(),
  }

  return {
    env,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });

      return config
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    basePath: '/wistia',
  }
};
