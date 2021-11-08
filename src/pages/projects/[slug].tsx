import Layout from '@/components/layout/PageLayout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import { readdirSync, readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import type { ParsedUrlQuery } from 'querystring';
import { useMemo } from 'react';
import rehypePrism from 'rehype-prism-plus';
import type { Project } from './index';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type ContentProps = {
  code: string;
} & Project;

export default function Project({ frontMatter, code }: ContentProps) {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  const title = frontMatter.title;
  const description = frontMatter.summary;

  return (
    <Layout>
      <Seo title={title} description={description} />
      <section>
        <h1>{title}</h1>
        {frontMatter.source && (
          <CustomLink href={frontMatter.source}>[Source]</CustomLink>
        )}
        <article className='break-words mt-4'>
          <MDXComponent />
        </article>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync(join('data/projects'));
  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace('.mdx', ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const source = readFileSync(join('data/projects', `${slug}.mdx`), 'utf-8');

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
      return options;
    },
  });
  return {
    props: {
      frontMatter: frontmatter,
      slug,
      code,
    },
  };
};
