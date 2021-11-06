import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center opacity-50 p-5'>
      <p>You can also find me here:</p>
      <nav className='flex items-center justify-center gap-2'>
        <UnstyledLink href='https://github.com/Claydelas'>
          <div className='flex items-center gap-1'>
            <FaGithub />
            claydelas
          </div>
        </UnstyledLink>
        |
        <UnstyledLink href='https://www.linkedin.com/in/mgvalchev'>
          <div className='flex items-center gap-1'>
            <FaLinkedin />
            mgvalchev
          </div>
        </UnstyledLink>
        |
        <UnstyledLink href='https://www.instagram.com/s._.marto'>
          <div className='flex items-center gap-1'>
            <FaInstagram />
            s._.marto
          </div>
        </UnstyledLink>
      </nav>
    </div>
  );
}
