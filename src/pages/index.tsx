import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <section>
        <div className='p-3 mb-6 text-center bg-red-500 rounded-lg'>
          Hello, this is a short intro message!
        </div>

        <div className='md:flex'>
          <div className='flex-grow'>
            <h2>Martin Valchev</h2>
            <p>description</p>
          </div>
        </div>
      </section>
      <section className='delay-100'>
        <h3>Work</h3>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          venenatis eros ut tortor varius, id elementum ante sagittis. Fusce
          quis sodales dolor. Sed sed arcu sem. Quisque faucibus blandit nisl
          sed elementum. Curabitur nec nunc lacinia, tristique dolor id, egestas
          dui. Quisque interdum non purus ac facilisis. Nullam pretium, arcu
          quis molestie bibendum, mauris orci varius orci, non mattis libero.
        </p>
        <div className='items-center my-4'>
          <ButtonLink href='/rojects'>Projects</ButtonLink>
        </div>
      </section>
    </Layout>
  );
}
