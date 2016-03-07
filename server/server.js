import koa from 'koa';
import views from 'koa-render';
import serve from 'koa-static-cache';
import mount from 'koa-mount';
import Router from 'koa-router';
import webpackMiddleware from '../middleware/index.js';
import webpack from 'webpack';
import path from 'path';

import ClientRenderer from './server-router';
import webpackConfig from '../webpack.config.js';

let app = new koa();

let compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  headers: { "X-Custom-Header": "yes" },
  stats: {
    color: true
  },
}))

function * capture() {
  this.status = 404;
}

app.use(mount('/build', capture));

const clientRenderer = new ClientRenderer()

app.use(clientRenderer.routes)


app.listen(3000, function() {
  console.log('Port is listen on 3000...');
});
