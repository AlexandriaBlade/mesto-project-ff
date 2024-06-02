// Подключение плагинов к файлу
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // Подключение плагинов к PostCSS
  plugins: [
    // Подключение autoprefixer
    autoprefixer,
    // При подключении cssnano необходимо передать объект опций
    // { preset: 'default' } указывает на использование стандартных настроек минификации
    cssnano({ preset: 'default' })
  ]
};
