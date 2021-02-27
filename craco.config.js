const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#4A87F8',
              '@font-family': 'Lato, sans-serif',
              '@btn-font-weight': 700,
              '@btn-border-radius-base': '8px',
              '@btn-height-base': '46px',
              '@btn-shadow': 'none',
              '@btn-primary-shadow': 'none',
              '@btn-text-shadow': 'none',
              '@tooltip-max-width': '240px',
              '@tooltip-bg': '#3C3F45',
              '@tooltip-arrow-width': '7px',
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};