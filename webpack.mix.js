const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.version()
	.disableNotifications();
	//La función = .disableNotifications() Permite ocultar las notificaciones al momento de guardar componentes Vue.
   //.sass('resources/sass/app.scss', 'public/css');
