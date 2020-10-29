/**
 * Filters component
 *
 * USER STORY 3 - Filter products without some allergens
 * @todo: a filter component
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import Styled from './filters.styled';
import Icon from '../../atoms/Icon/icon';
import actions from '../../../constants/actions/simple-action';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <Styled onClick={() => dispatch({ type: actions.TOGGLE_MODAL })}>
      <Styled.Logo>
        <Icon icon="heart" width={14} color="secondary" />
      </Styled.Logo>
      Mes Préferences
    </Styled>
  );
};

export default Filters;
