import ProjectCard from '@/components/containers/ProjectCard';
import Layout from '@/components/layout/PageLayout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import type { tech } from '@/components/TechStack';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export type Project = {
  slug: string;
  frontMatter: {
    title: string;
    summary: string;
    techStack: tech[];
    source?: string;
  };
};

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => (
  <Layout>
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
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.slug}
              href={project.slug}
              title={project.frontMatter.title}
              techStack={project.frontMatter.techStack}
            >
              {project.frontMatter.summary}
            </ProjectCard>
          );
        })}
      </div>
    </section>
  </Layout>
);
export default Projects;

export const getStaticProps = async () => {
  const files = readdirSync(join('data/projects'));
  const projects = files.map((filename) => {
    const source = readFileSync(join('data/projects', filename), 'utf-8');
    const { data: frontMatter } = matter(source);
    return {
      frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });
  return {
    props: {
      projects,
    },
  };
};
