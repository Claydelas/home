import CustomLink from '@/components/links/CustomLink';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaHeart } from 'react-icons/fa';

const links = [{ href: '/projects', label: 'Projects' }];

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <nav className='fixed w-full z-10 backdrop-blur'>
      <div className='flex flex-wrap items-center justify-between max-w-[60ch] p-2 mx-auto text-lg'>
        <div className='flex gap-x-4'>
          <CustomLink href='/' className='gap-1'>
            <FaHeart />
            Hearthstone
          </CustomLink>
          {links.map(({ href, label }) => (
            <CustomLink key={href} href={href}>
              {label}
            </CustomLink>
          ))}
        </div>
        {isMounted && (
          <span onClick={switchTheme}>
            {resolvedTheme === 'dark' ? (
              <FaSun size='26' className='theme' />
            ) : (
              <FaMoon size='26' className='theme' />
            )}
          </span>
        )}
      </div>
    </nav>
  );
}
