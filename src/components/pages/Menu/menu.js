import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Modal from '../../organisms/Modal/modal';
import Styled from './menu.styled';

/**
 * MenuPage component
 *
 * USER STORY 1 - Search products by name
 * @todo: add search bar
 * USER STORY 3 - Filter products without some allergens
 * @todo: add filter bar
 */
const Menu = ({ className, data }) => {
  const menuBlocks = Object.keys(data);
  return (
    <Styled>
      <Modal />
      <Styled.SideBar />
      <Styled.Main className={className}>
        {menuBlocks.map((block) => {
          const { id, label, items } = data[block];
          return (
            <Styled.Block
              blockId={block}
              key={id}
              title={label}
              products={items}
            />
          );
        })}
      </Styled.Main>
    </Styled>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};

Menu.defaultProps = {
  className: undefined,
  data: {},
};
const mapStateToProps = (state) => {
  const { data } = state.mainReducer;
  return { data };
};
export default connect(mapStateToProps)(Menu);
