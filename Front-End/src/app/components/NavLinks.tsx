'use client';

import { HomeIcon, FilmIcon, Cog6ToothIcon, UserPlusIcon, FolderOpenIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Skills', href: '/#skills', icon: Cog6ToothIcon },
  { name: 'Projects', href: '/#projects', icon: FolderOpenIcon },
  { name: 'Contact', href: '/#contact', icon: UserPlusIcon },
  { name: 'Film', href: '/film', icon: FilmIcon },
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
    <>
      <div style={{ height: navHeight }} aria-hidden="true" />

      <div className="navbar fixed top-0 left-0 w-full flex justify-center items-center bg-mocha/[.85] text-sm md:text-2xl text-white font-bold py-1 gap-[1rem] md:gap-[4rem] z-50">
        {links.map((link) => (
          <div key={link.name}>
            <a href={link.href} className="hover:fill-[#569A86] hover:text-[#569A86]">
              <link.icon className="w-10 h-auto m-auto" href={link.href}/>
              <p>{link.name}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}