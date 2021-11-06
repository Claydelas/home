import Seo from '@/components/Seo';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Seo />
      <section>
        <div className='p-3 mb-6 text-center bg-white bg-opacity-40 rounded-lg dark:bg-opacity-10'>
          Hello, welcome to my cosy home!
        </div>

        <div className='md:flex text-center md:text-left'>
          <div className='flex-grow'>
            <h2>Martin Valchev</h2>
            <p>Athlete by day / Developer by night</p>
          </div>
          <figure className='flex-shrink-0 mt-4 md:mt-0'>
            <Image
              className='inline-block !border-2 !border-solid !rounded-full !border-light'
              src='/images/martin-bw.png'
              alt='Me :)'
              width={120}
              height={120}
              quality={100}
            />
          </figure>
        </div>
      </section>
      <section>
        <h3>Me</h3>
        <p className='text-justify'>
          Hello! I&apos;m a recent graduate, that is now ready to dive into the
          world of professional Software Engineering. I&apos;d like to think of
          myself as a creative person, who meets challenges with a smile.
          Working on complex and innovative projects excites me like few other
          things do. I&apos;m eager to work in a team with like-minded people,
          where I have the opportunity to learn and grow as a person. I have a
          passion for exploring new technologies, solving real-life problems
          with code and automation. <br />
          When I&apos;m taking a break from coding the next big thing, I like to
          enjoy a good time with my friends playing basketball, working on
          ourselves in the gym or competing in various video games as a team.
        </p>
      </section>
    </>
  );
}
