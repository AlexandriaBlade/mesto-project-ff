const presets = [
    ['@babel/preset-env', {
      targets: {
        edge: '17', // версия Edge
        ie: '11', // версия Internet Explorer
        firefox: '50', // версия Firefox
        chrome: '64', // версия Chrome
        safari: '11.1' // версия Safari
      },
      useBuiltIns: "entry"
    }]
  ];
  
  module.exports = { presets };
  