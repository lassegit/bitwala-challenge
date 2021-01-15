import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Flex } from 'rebass';

const activeClassName = 'tabs-menu-link-active';
export const LinkSt = styled(NavLink).attrs({ activeClassName })`
  padding: ${({ theme }) => `${theme.space[3]}px`};
  margin-bottom: -1px;
  border: 1px solid transparent;
  text-decoration: none;

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.grayDarker};
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[0]}) {
      &.${activeClassName} {
        border: 1px solid ${theme.colors.gray};
        border-bottom: 1px solid ${theme.colors.white};
      }

      &:hover,
      &:focus {
        border-top: 1px solid ${theme.colors.gray};
        border-right: 1px solid ${theme.colors.gray};
        border-left: 1px solid ${theme.colors.gray};
      }
    }
  `}
`;

export const TabsMenuSt = styled(Flex)`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[0]}) {
      border-bottom: 1px solid ${theme.colors.gray};
    }
  `}
`;
