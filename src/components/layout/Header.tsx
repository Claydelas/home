import CustomLink from '@/components/links/CustomLink';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const links = [{ href: '/projects', label: 'Projects' }];

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <nav className='fixed w-full z-1 backdrop-blur'>
      <div className='flex flex-wrap items-center justify-between max-w-md p-2 mx-auto'>
        {links.map(({ href, label }) => (
          <CustomLink key={href} href={href}>
            {label}
          </CustomLink>
        ))}
        {isMounted && (
          <span onClick={switchTheme}>
            {theme === 'dark' ? (
              <FaSun size='24' className='theme' />
            ) : (
              <FaMoon size='24' className='theme' />
            )}
          </span>
        )}
      </div>
    </nav>
  );
}
