import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import { RiAlarmWarningFill } from 'react-icons/ri';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />
      <section className='min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center text-center'>
        <RiAlarmWarningFill
          size={60}
          className='text-yellow-300 animate-flicker drop-shadow-glow'
        />
        <h1 className='mt-8'>Page Not Found</h1>
        <CustomLink className='mt-4' href='/'>
          Back to Home
        </CustomLink>
      </section>
    </>
  );
}

NotFoundPage.includeModel = false;
