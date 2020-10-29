import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ProductCardHorizontal from './product-card-horizontal';

import Placeholders from '../../../helpers/dummy/placeholders';

const IMG_URL = Placeholders.image(280, 180);

const props = {
  title: 'Title',
  price: 1000,
  imageUrl: IMG_URL,
  onClick: action('Add to Cart'),
};

storiesOf('Molecules/ProductCardHorizontal', module).add('default', () => (
  <ProductCardHorizontal
    imageUrl={props.imageUrl}
    price={props.price}
    title={props.title}
    onClick={props.onClick}
  />
));
