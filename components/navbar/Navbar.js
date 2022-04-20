import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const pages = [
  { name: 'Hjem', href: '/' },
  { name: 'Lokasjoner', href: '/locations' },
  { name: 'Om oss', href: '/about' },
  { name: 'Firmaavtale', href: '/companyagreement' },
];

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav className='flex'>
      {pages.map((page) => (
        <Link key={name} href={page.href}>
          <a
            className={`font-bold py-8 ${
              router.pathname === page.href
                ? 'text-rose-500 hover:text-rose-800'
                : 'text-sky-500 hover:text-sky-800'
            }`}
          >
            {page.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};
