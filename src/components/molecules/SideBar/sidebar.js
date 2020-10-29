import React from 'react';
import PropTypes from 'prop-types';
import Styled from './sidebar.styled';
import menuContent from '../../../constants/mocks/menu.json';
import Filters from '../../organisms/FIlters/filters';

const SideBar = ({ className }) => {
  const slugs = Object.keys(menuContent);

  return (
    <Styled className={className}>
      <Filters />
      <Styled.Catgories>
        {slugs.map((slug) => (
          <Styled.Category key={slug}>
            <Styled.Link href={`#${slug}`}>
              {menuContent[slug].label}
            </Styled.Link>
          </Styled.Category>
        ))}
      </Styled.Catgories>
    </Styled>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};
SideBar.defaultProps = {
  className: undefined,
};

export default SideBar;
