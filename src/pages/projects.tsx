import ProjectCard from '@/components/containers/ProjectCard';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import type { GetStaticProps } from 'next';

const Projects = () => (
  <>
    <Seo
      title='Projects'
      description="Notable projects I've been working on."
    />
    <section>
      <h3 className='mb-4 text-center md:text-left'>Projects</h3>
      <h3 className='mb-4 text-center'>
        This page is under construction, check out my{' '}
        <CustomLink href='https://github.com/Claydelas'>GitHub</CustomLink> for
        the time being!
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-auto'>
        <ProjectCard
          href='active-learning'
          title='Active Learning Annotation Platform'
          techStack={['react', 'js', 'git']}
        >
          Tool for efficient dataset annotation using machine learning models as
          heuristics.
        </ProjectCard>
        <ProjectCard
          href='web-sec'
          title='Web/Cloud Application Security'
          techStack={['php']}
        >
          Securing web applications, protecting assets and risk mitigation.
        </ProjectCard>
      </div>
    </section>
  </>
);
export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
