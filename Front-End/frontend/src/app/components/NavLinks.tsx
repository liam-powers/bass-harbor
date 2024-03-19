'use client';

import { HomeIcon } from '@heroicons/react/24/solid';
import { GiGuitarBassHead, GiViolin } from "react-icons/gi";
import { useState, useEffect } from 'react';
import Link from 'next/link'

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Upright', href: './upright', icon: GiViolin },
  { name: 'Electric', href: './electric', icon: GiGuitarBassHead },
];

export default function NavLinks() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
      const nav = document.querySelector('.navbar') as HTMLElement;
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
  }, []);

  return (
    <div>
      <div style={{ height: navHeight }} aria-hidden="true" />

      <div className="pb-10">
        <div className="navbar fixed top-0 left-0 w-full flex justify-center items-center bg-navy/[1.0] text-sm md:text-2xl text-white font-bold py-1 gap-[1rem] md:gap-[10rem] z-50">
          {links.map((link) => (
            <div key={link.name}>
              <Link href={link.href} className="hover:fill-cream hover:text-cream">
                <link.icon className="w-10 h-auto m-auto" href={link.href} />
                <div>{link.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}