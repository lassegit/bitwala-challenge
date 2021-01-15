import React from 'react';
import { LinkSt, TabsMenuSt } from './TabsMenu.styles';

interface linkProp {
  text: string;
  to: string;
}

function TabsMenu(props: { links: linkProp[] }) {
  const { links } = props;

  return (
    <TabsMenuSt flexDirection={['column', 'row']}>
      {links.map((link) => (
        <LinkSt key={link.to} exact to={link.to}>
          {link.text}
        </LinkSt>
      ))}
    </TabsMenuSt>
  );
}

export default TabsMenu;
