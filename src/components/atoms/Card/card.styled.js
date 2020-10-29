import React from 'react';
import styled, { css } from 'styled-components';

const Styled = styled(({ isPlayable, tagName: TagName, ...rest }) => (
  <TagName {...rest} />
))`
  background-color: white;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(139, 159, 196, 0.2);
  height: 30rem;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
  flex: 1 1 calc(50% - 1.2rem);

  ${({ isPlayable }) => (isPlayable
    ? css`
          &:hover {
            box-shadow: 0 1.2rem 2.4rem 0 rgba(139, 159, 196, 0.2);
          }
        `
    : '')}
`;

export default Styled;
