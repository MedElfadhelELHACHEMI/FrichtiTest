import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import configureStore from '../../../store';

import SearchBar from './search-bar';
import GlobalStyles from '../../../styles/globals/globals.styled';


storiesOf('Molecules/SearchBar', module).add('default', () => (
  <Provider store={configureStore()}>
    <GlobalStyles />
    <SearchBar />
  </Provider>
));
