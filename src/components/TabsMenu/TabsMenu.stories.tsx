import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TabsMenu from './TabsMenu';

const links = [
  { text: 'First link', to: '/' },
  { text: 'Second link', to: '/2' },
  { text: 'Third link', to: '/3' },
];

export default {
  title: 'Components/TabsMenu',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Primary = () => <TabsMenu links={links} />;
