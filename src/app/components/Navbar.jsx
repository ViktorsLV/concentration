'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Game', href: '/game' },
  { name: 'About', href: '/about' },
  { name: 'Instructions', href: '/instructions' }
];

const activeLink = 'bg-gray-700 text-white w-fit';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="z-50 bg-primary">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {pages.map((page) => {
                      const isActive = pathname === page.href;
                      return (
                        <Link
                          key={page.name}
                          href={page.href}
                          className={`${isActive ? activeLink : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}
                          aria-current={isActive ? 'page' : undefined}>
                          {page.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block w-6 h-6" aria-hidden="true" /> : <Bars3Icon className="block w-6 h-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col items-end justify-end px-2 pt-2 pb-3 space-y-1">
              {pages.map((page) => {
                const isActive = pathname === page.href;
                return (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={`${isActive ? activeLink : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}
                    aria-current={isActive ? 'page' : undefined}>
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
