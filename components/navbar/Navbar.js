import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ className, href, children, passHref }) => {
  const router = useRouter();
  return (
    <Link href={href} passHref={passHref}>
      <a
        className={`font-bold pr-8 ${
          router.pathname === href
            ? 'text-rose-500 hover:text-rose-800'
            : 'text-sky-500 hover:text-sky-800'
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
