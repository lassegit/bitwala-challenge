import React from 'react';
import { render } from '@testing-library/react';
import server from '../../mocks/server';
import Blocks from './Blocks';
import mountWithAll from '../../utils/mountWithAll';

/**
 * Initial setup for an integration test, i.e. testing the mounted container with API
 * and verifying the actual DOM element
 */
describe('Blocks', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders with data', () => {
    render(mountWithAll(<Blocks />));
    // Todo: Verify data renders to DOM
  });
});
