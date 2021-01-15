import styled from 'styled-components';
import { Heading } from 'rebass/styled-components';

/**
 * Export the headings we need
 */
export const Heading1 = styled(Heading).attrs((props) => ({
  as: 'h1',
  fontSize: [5, 6, 7],
  ...props,
}))``;

Heading1.displayName = 'Heading1';

export const Heading2 = styled(Heading).attrs((props) => ({
  as: 'h2',
  fontSize: [4, 5, 6],
  ...props,
}))``;

Heading2.displayName = 'Heading2';

export const Heading3 = styled(Heading).attrs((props) => ({
  as: 'h3',
  fontSize: [3, 4, 5],
  ...props,
}))``;

Heading3.displayName = 'Heading3';

export const Heading4 = styled(Heading).attrs((props) => ({
  as: 'h4',
  fontSize: [3, 4, 5],
  ...props,
}))``;

Heading4.displayName = 'Heading4';

export const Heading5 = styled(Heading).attrs((props) => ({
  as: 'h5',
  fontSize: [3, 4, 5],
  ...props,
}))``;

Heading5.displayName = 'Heading5';
