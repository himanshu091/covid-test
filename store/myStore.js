import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';


import authReducer from './reducers/authReducer'

import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux configuration starts
const rootReducer = combineReducers({
    auth: authReducer,
})

const persistConfig = {
    key: 'travel_clini_v1',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

  // Redux configuration ends

export default store;