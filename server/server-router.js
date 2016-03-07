import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import Emitter from 'component-emitter';
import createLocation from 'history/lib/createLocation';
import path from 'path';
import HTML from './html'

const doctype = '<!DOCTYPE html>';

export default class ServerRouter {
  constructor() {  
  }
  get routes() {
    return function * (next) {
      yield this::clientRenderer();
    }
  }

};

Emitter(ServerRouter.prototype);

function *clientRenderer() {
  let location = createLocation(this.req.url);
  this.body = doctype + renderToStaticMarkup(
    <HTML />
  )
}
