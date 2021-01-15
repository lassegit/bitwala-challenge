import React from 'react';
import { Button as RebassButton } from 'rebass/styled-components';

function Button(props) {
  // Here we can make our customizations without having to build the entire functionality, foreinstance onClick
  return <RebassButton {...props} />;
}

export default Button;
