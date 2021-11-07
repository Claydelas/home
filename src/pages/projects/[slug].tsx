import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import type { ParsedUrlQuery } from 'querystring';
import type { Project } from './index';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type ContentProps = {
  mdx: MDXRemoteSerializeResult;
} & Project;

export default function Project({ frontMatter, mdx }: ContentProps) {
  const title = frontMatter.title;
  const description = frontMatter.summary;

  return (
    <>
      <Seo title={title} description={description} />
      <section>
        <h3>{title}</h3>
        {frontMatter.source && (
          <CustomLink href={frontMatter.source}>[Source]</CustomLink>
        )}
        <article className='break-words mt-4'>
          <MDXRemote {...mdx} />
        </article>
      </section>
    </>
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
  const { data: frontMatter, content } = matter(source);
  const mdx = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdx,
    },
  };
};
