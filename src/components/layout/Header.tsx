import * as React from 'react';

import CustomLink from '@/components/links/CustomLink';

const links = [
  { href: '/projects', label: 'Projects' }
];

export default function Header() {
  return (
    <nav className="fixed w-full z-1 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between max-w-md p-2 mx-auto">
        {links.map(({ href, label }) => (
          <CustomLink key={href} href={href}>
            {label}
          </CustomLink>
        ))}
      </div>
    </nav>
  );
}
