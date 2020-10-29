import styled from 'styled-components';

import SIZES from '../../../styles/constants/sizes';

const Styled = styled.article`
  width: 100%;
`;

Styled.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: -${SIZES.gutter};

  > * {
    flex: 1 1 calc(25% - ${SIZES.gutter} - ${SIZES.gutter});
    margin: ${SIZES.gutter};
  }
`;

export default Styled;
