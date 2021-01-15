import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './Heading';

const title = 'My custom title!';

export default { title: 'Components/Heading' };

export const H1 = () => <Heading1>{title}</Heading1>;

export const H2 = () => <Heading2>{title}</Heading2>;

export const H3 = () => <Heading3>{title}</Heading3>;

export const H4 = () => <Heading4>{title}</Heading4>;

export const H5 = () => <Heading5>{title}</Heading5>;
