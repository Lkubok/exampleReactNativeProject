/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { logoutMiddleware, securityMiddleware, bugsnagMiddleware, invalidTokenMiddleware } from 'middlewares';

export const additionalMiddlewares = [
  thunk,
  logoutMiddleware,
  securityMiddleware,
  bugsnagMiddleware,
  invalidTokenMiddleware,
];
const flipperDebugger = require('redux-flipper').default;

additionalMiddlewares.push(flipperDebugger());
const store = createStore(reducers, compose(applyMiddleware(...additionalMiddlewares)));

export default store;
