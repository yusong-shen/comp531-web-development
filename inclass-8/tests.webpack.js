var context = require.context('./src', true, /^((?!index.js).)*\.jsx?$/);
//var context = require.context('./src', true, /ttt.spec.js/);
//var context = require.context('./src', true, /.*\.jsx?$/);
context.keys().forEach(context);
