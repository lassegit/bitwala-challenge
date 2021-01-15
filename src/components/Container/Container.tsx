import React from 'react';
import { Box } from 'rebass/styled-components';

function Container(props: { children: React.ReactNode }) {
  const { children, ...rest } = props;

  return (
    <Box maxWidth={1280} p={3} mx="auto" {...rest}>
      {children}
    </Box>
  );
}

export default Container;
