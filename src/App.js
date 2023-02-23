import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Map from './components/Map';
import SearchHistory from './components/SearchHistory';

const App = () => {
  return (
    <Provider store={store}>
      <Map />
      <SearchHistory />
    </Provider>
  );
};

export default App;
