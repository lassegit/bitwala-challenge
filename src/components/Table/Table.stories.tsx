import React from 'react';
import Table from './Table';

export default { title: 'Components/Table' };

const thead = (
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
    <th>Column 4</th>
  </tr>
);
const row = (id: number) => (
  <tr key={id}>
    <td>{Math.random()}</td>
    <td>{Math.random()}</td>
    <td>{Math.random()}</td>
    <td>{Math.random()}</td>
  </tr>
);
const children = [row(1), row(2), row(3), row(4), row(5)];

export const Primary = () => <Table thead={thead}>{children}</Table>;
export const withoutHead = () => <Table>{children}</Table>;
