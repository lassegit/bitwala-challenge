import styled from 'styled-components';

export const TableSt = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: ${({ theme }) => `${theme.space[3]}px`};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: left;
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.grayLighter};
  }
`;

export const TableWrapperSt = styled.div`
  overflow-x: scroll;
`;
