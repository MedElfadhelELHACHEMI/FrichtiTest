import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import typography from '../../../styles/utils/typography';

import Picture from '../../atoms/Picture/picture';
import Card from '../../atoms/Card/card';
import breakpoint from '../../../styles/utils/breakpoint';

const Styled = {};

Styled.Card = styled(Card)`
  box-shadow: none;
`;
Styled.Content = styled.figure`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

Styled.ThumbnailContainer = styled.div`
  position: relative;
  height: 8rem;
  width: 8rem;
  display: grid;
  place-items: center;
`;

Styled.Thumbnail = styled(Picture)`
  position: relative;
`;

Styled.Support = styled.figcaption`
  display: flex;
  flex-direction: row;
  height: 8rem;
  padding: 1.6rem;
  width: calc(100% - 8rem);
`;

Styled.Title = styled.h3`
  ${typography({ fontSize: '1.5rem', fontWeight: 900, lineHeight: '1.2rem' })};
  color: ${COLORS.dark};
  flex: 0.4;
  margin-bottom: 0.4rem;
`;
Styled.Description = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

Styled.Unit = styled.p`
  ${typography({
    fontSize: '1.2rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    lineHeight: '1.6rem',
  })};
  color: ${COLORS.grey};
`;

Styled.Price = styled.p`
  ${typography({ fontSize: '1.5rem', fontWeight: 500, lineHeight: '1rem' })};
  color: ${COLORS.dark};
  margin-right: 3rem;
`;

Styled.Info = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
Styled.Action = styled.button`
  position: absolute;
  right: 4rem;
  height: 3.6rem;
  width: 4.3rem;
  background-color: ${COLORS.primary};
  border: none;
  cursor: pointer;
  outline: none;
`;
Styled.Logo = styled.figure`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex: 1;
  justify-content: center;
  ${breakpoint.medium`
    flex: 0;
  `}
`;
export default Styled;
