/**
 * SearchBar component
 *
 * USER STORY 1 - Search products by name
 * @todo: a search bar component
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from './searchbar.styled';
import Icon from '../../atoms/Icon/icon';
import actions from '../../../constants/actions/simple-action';
import ProductCardHorizontal from '../ProductCardHorizontal/product-card-horizontal';

const SearchBar = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.mainReducer.filteredItems);
  return (
    <Styled>
      <Styled.InputContainer>
        <Styled.Logo>
          <Icon icon="search" width={24} />
        </Styled.Logo>
        <Styled.Input
          type="text"
          className="searchBar"
          onChange={(e) => dispatch({ type: actions.SEARCH, payload: e.target.value })}
        />
      </Styled.InputContainer>
      {filteredItems.length !== 0 && (
        <Styled.Results>
          {filteredItems.map((item) => (
            <Styled.ResultItem key={item.product.productId}>
              <ProductCardHorizontal
                price={item.product.price}
                imageUrl={item.product.images[0]}
                title={item.product.title}
                packaging={item.product.packaging}
              />
            </Styled.ResultItem>
          ))}
        </Styled.Results>
      )}
    </Styled>
  );
};

export default SearchBar;
