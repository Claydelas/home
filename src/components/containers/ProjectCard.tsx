import UnstyledLink from '@/components/links/UnstyledLink';
import type { tech } from '@/components/TechStack';
import TechStack from '@/components/TechStack';

type CardProps = {
  techStack: tech[];
  href: string;
  title: string;
  children: string | JSX.Element;
};

export default function ProjectCard({
  techStack,
  href,
  title,
  children,
}: CardProps) {
  return (
    <article className='min-h-[12rem] border-2 dark:border-light border-dark rounded-md border-thin border-transition'>
      <UnstyledLink
        href={`/projects/${href}`}
        className='block h-full p-4 rounded-md'
      >
        <div className='flex flex-col h-full gap-2'>
          <div className='flex flex-col h-1/2 justify-between'>
            <h4>{title}</h4>
            <TechStack techs={techStack} />
          </div>
          <p className='h-1/2'>{children}</p>
        </div>
      </UnstyledLink>
    </article>
  );
}
