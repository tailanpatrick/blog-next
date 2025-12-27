'use client';
import Image from 'next/image';
import logo from '@/public/logo.png';
import SearchMenuWithSocials from './SearchMenuAndSocials';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-around items-center bg-white z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 shadow-md' : 'relative'
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="" width={50} />
      </Link>
      <SearchMenuWithSocials />
    </header>
  );
};

export default Header;
