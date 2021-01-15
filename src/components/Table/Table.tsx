import React from 'react';
import { TableSt, TableWrapperSt } from './Table.styles';

function Table(props: { children: React.ReactNode; thead?: React.ReactNode }) {
  const { thead, children } = props;

  return (
    <TableWrapperSt>
      <TableSt>
        {thead && <thead>{thead}</thead>}
        <tbody>{children}</tbody>
      </TableSt>
    </TableWrapperSt>
  );
}

Table.defaultProps = {
  thead: undefined,
};

export default Table;
