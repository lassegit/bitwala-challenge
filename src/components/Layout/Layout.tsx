import React from 'react';
import { Box } from 'rebass/styled-components';
import { Heading1 } from '../Heading/Heading';
import Container from '../Container/Container';
import Header from '../Header/Header';
import TabsMenu from '../TabsMenu/TabsMenu';

function Layout(props: { title: string; children: React.ReactNode }) {
  const { title, children } = props;
  const links = [
    { text: 'Blocks', to: '/' },
    { text: 'Transactions', to: '/transactions' },
  ];

  return (
    <Container>
      <Header />
      <TabsMenu links={links} />
      <Heading1>{title}</Heading1>
      <Box>{children}</Box>
    </Container>
  );
}

export default Layout;
