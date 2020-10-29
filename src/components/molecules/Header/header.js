import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon/icon';
import Styled from './header.styled';
import SearchBar from '../SearchBar/search-bar';

const Header = ({ className, firstName }) => {
  const [index, setIndex] = useState(0);
  const handleClicked = useCallback(
    () => setIndex((index + 1) % firstName.length),
    [index, setIndex, firstName],
  );

  return (
    <Styled className={className}>
      <Styled.Logo>
        <Icon icon="frichti-text" width={100} />
      </Styled.Logo>
      <Styled.SearchContainer>
        <SearchBar />
      </Styled.SearchContainer>
      <Styled.FirstName
        type="button"
        onClick={handleClicked}
        title="Hello you!"
      >
        {firstName[index]}
      </Styled.FirstName>
    </Styled>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.array,
};

Header.defaultProps = {
  className: undefined,
  firstName: ['Jane Doe', 'John Doe'],
};

export default Header;
