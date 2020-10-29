import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon/icon';

import Styled from './product-card-horizontal.styled';

/**
 * ProductCardHorizontal component
 *
 * USER STORY 2 - Make menu mobile-first
 * @todo: make it fully adaptive/responsive
 */
const ProductCardHorizontal = ({
  className,
  imageUrl,
  price,
  title,
  packaging,
  onClick,
}) => {
  const finalPrice = (price / 100)
    .toFixed(2)
    .toString()
    .replace('.', ',');
  return (
    <Styled.Card className={className}>
      <Styled.Content>
        <Styled.ThumbnailContainer>
          <Styled.Thumbnail src={imageUrl} alt={title} />
        </Styled.ThumbnailContainer>
        <Styled.Support>
          <Styled.Info>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>
              <Styled.Price>{`${finalPrice}€`}</Styled.Price>
              {!!packaging && <Styled.Unit>{packaging}</Styled.Unit>}
            </Styled.Description>
          </Styled.Info>
          <Styled.Action onClick={onClick}>
            <Styled.Logo>
              <Icon icon="plus" width={14} />
            </Styled.Logo>
          </Styled.Action>
        </Styled.Support>
      </Styled.Content>
    </Styled.Card>
  );
};

ProductCardHorizontal.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  packaging: PropTypes.string,
  onClick: PropTypes.func,
};

ProductCardHorizontal.defaultProps = {
  className: undefined,
  packaging: null,
};

export default ProductCardHorizontal;
