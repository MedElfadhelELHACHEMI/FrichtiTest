import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import SideBar from './sidebar';
import Modal from '../../organisms/Modal/modal';
import configureStore from '../../../store';
import GlobalStyles from '../../../styles/globals/globals.styled';

const props = {};

storiesOf('Molecules/SideBar', module).add('default', () => (
  <Provider store={configureStore()}>
    <GlobalStyles />
    <Modal />
    <SideBar />
  </Provider>
));
