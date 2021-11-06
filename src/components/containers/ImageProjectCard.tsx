import NextLink from 'next/link';
import Image from 'next/image';

type CardProps = {
  children?: JSX.Element | string;
  href: string;
  title: string;
  thumbnail: StaticImageData;
};

export default function ImageProjectCard({
  children,
  href,
  title,
  thumbnail,
}: CardProps) {
  return (
    <article className='w-full text-center'>
      <NextLink href={href}>
        <figure className='cursor-pointer'>
          <Image
            src={thumbnail}
            alt={title}
            className='rounded-xl'
            placeholder='blur'
            loading='lazy'
          />
          <p className='mt-2'>{title}</p>
        </figure>
      </NextLink>
      <p className='text-sm'>{children}</p>
    </article>
  );
}
