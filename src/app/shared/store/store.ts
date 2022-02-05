import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducer';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, epicMiddleware)));

epicMiddleware(store);

export type AppState = ReturnType<typeof store.getState>;
