import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Styled from './modal.styled';
import actions from '../../../constants/actions/simple-action';
import Icon from '../../atoms/Icon/icon';
import data from '../../../constants/mocks/menu.json';
import { getInitialAllergens } from '../../../helpers/menu/allergens';

const Modal = () => {
  const showModal = useSelector((state) => state.mainReducer.showModal);
  const selectedAllergens = useSelector(
    (state) => state.mainReducer.selectedAllergens,
  );
  const allergens = getInitialAllergens(data);
  const dispatch = useDispatch();
  if (showModal) {
    return (
      <Styled
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: actions.TOGGLE_MODAL });
        }}
      >
        <Styled.ModalContent>
          <Styled.ModalTitle>
            <Styled.Logo>
              <Icon icon="heart" width={22} color="secondary" />
            </Styled.Logo>
            Mes préférences
          </Styled.ModalTitle>
          <Styled.ModalDescription>
            <Styled.ModalAllergensTitle>Allergens</Styled.ModalAllergensTitle>
            <Styled.ModalAllergensList>
              {allergens.map((allergen) => (
                <Styled.ModalAllergensItem
                  selected={selectedAllergens.includes(allergen)}
                  key={uuidv4()}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch({
                      type: actions.FILTER_ALLERGEN,
                      payload: allergen,
                    });
                  }}
                >
                  {`No ${allergen}`}
                </Styled.ModalAllergensItem>
              ))}
            </Styled.ModalAllergensList>
          </Styled.ModalDescription>
        </Styled.ModalContent>
      </Styled>
    );
  }
  return null;
};

export default Modal;
