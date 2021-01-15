import React from 'react';
import { render, screen } from '@testing-library/react';
import mountWithAll from '../../utils/mountWithAll';
import Table from './Table';

describe('Table', () => {
  const thead = (
    <tr>
      <td>thead</td>
    </tr>
  );
  const body = (
    <tr>
      <td>body</td>
    </tr>
  );

  test('renders', () => {
    render(mountWithAll(<Table thead={thead}>{body}</Table>));
    screen.getByText('thead');
    screen.getByText('body');
  });

  test("doesn't render thead", () => {
    render(mountWithAll(<Table>{body}</Table>));
    expect(screen.queryByText('thead')).toBeNull();
    screen.getByText('body');
  });
});
